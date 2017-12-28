define(function(require, exports, module) {
    var { _, $ } = require('../../../core/shim/shim');
    var Utils = require('../../../core/utils/Utils');
    var Component = require('../../Component');

    var GRID_TITLE_HEIGHT = 34;
    var GRID_HEADER_HEIGHT = 35;
    var GRID_BODY_HEIGHT = 34;
    var GRID_TOOLBAR_HEIGHT = 49;
    var CELL_PADDING = 21;
    var FLEX_MIN_WIDTH = 35;
    var CHECKBOX_WIDTH = 37;

    var Tmpl = {
        titleTmpl: titleTmpl,
        headerContainer: headerContainer,
        headerTmpl: headerTmpl,
        bodyTmpl: bodyTmpl,
        renderTmpl: renderTmpl,
        renderEditTmpl: renderEditTmpl,
        pageTmpl: pageTmpl,
        zeroDataMask: zeroDataMask
    };

    function pickText(fragment) {
        var htmlString = new RegExp('\<.+?\>', 'g');
        if (htmlString.test(fragment)) {
            return fragment.replace(htmlString, '');
        }
        return fragment;
    }

    function _calcGridProp(options) {
        var width = options.width,
            height = options.height,
            tHeight = options.title ? GRID_TITLE_HEIGHT : 0,
            hHeight = GRID_HEADER_HEIGHT,
            fHeight = options.page ? GRID_TOOLBAR_HEIGHT : 0;

        return {
            width: width,
            height: height,
            title: { height: tHeight },
            header: {
                height: function(h) {
                    if (+h) hHeight = +h;
                    return hHeight;
                }
            },
            body: {
                height: function(h) {
                    if (+h) {
                        return +h - tHeight - hHeight - fHeight;
                    }
                    return 500 - tHeight - hHeight - fHeight;
                }
            },
            footer: {
                height: fHeight
            }
        };
    }

    function _scrollEvent(gridHeader, gridBody) {
        gridBody.on('scroll', function(ev) {
            var target = ev.currentTarget,
                left = target.scrollLeft,
                top = target.scrollTop,
                offset = {
                    scrollLeft: left,
                    scrollTop: top,
                    scrollWidth: target.scrollWidth,
                    scrollHeight: target.scrollHeight,
                    viewClientWidth: gridBody.width(),
                    viewClientHeight: gridBody.height()
                };

            gridHeader.css({
                'left': -left + 'px'
            });
            gridBody.trigger('scrollend', offset);
        })
    }

    function _gridBodyEvent(gridHeader, gridBody, selType, rowSet) {
        var items = [];
        var selected = [];
        var selectedAll = false;
        var preActived = null;
        var preselect = rowSet.preselect || function() { return true; };

        return {
            once: function() {
                gridBody.on('click.row dblclick.row', 'ul.s-record-rows', items, function(ev) {
                    var li = $(this),
                        rownumber = li.data('rownumber'),
                        filterItem;

                    filterItem = items.filter(function(item) {
                        return item.rownumber == rownumber;
                    })[0];

                    gridBody.trigger('item' + ev.type, {
                        'item': filterItem,
                        'event': ev
                    });
                });

                gridBody.on('click.cell', 'li.s-record-cell', items, function(ev) {
                    var li = $(this),
                        ul = li.parent('ul.s-record-rows'),
                        rownumber = ul.data('rownumber'),
                        dataIndex = li.data('dataindex'),
                        filterItem;

                    filterItem = items.filter(function(item) {
                        return item.rownumber == rownumber;
                    })[0];

                    gridBody.trigger('cellclick', {
                        'value': filterItem[dataIndex],
                        'item': filterItem,
                        'columnIndex': li.index(),
                        'rowIndex': items.indexOf(filterItem),
                        'event': ev
                    });

                    if (li.hasClass('checkbox-col') && !li.hasClass('s-readonly')) {
                        if (ul.hasClass('s-record-selected')) {
                            ul.removeClass('s-record-selected');
                            selected.splice(selected.indexOf(ul.get(0)), 1);

                            gridHeader.find('li.checkbox-col').removeClass('s-record-selected');
                            gridBody.trigger('selectionchange');
                        } else {
                            if (preselect() !== false) {
                                ul.addClass('s-record-selected');
                                selected.push(ul.get(0));
                                gridBody.trigger('selectionchange');
                            }
                        }
                        ev.bubbles = false;
                        return false;
                    }
                    var activeRowClass = rowSet.activeClass || '';
                    if (preActived && preActived !== ul) {
                        preActived.removeClass('s-record-active ' + activeRowClass);
                    }
                    preActived = ul.addClass('s-record-active ' + activeRowClass);
                });
            },
            setItems: function(sourceItems) {
                items = sourceItems;

                var rows = gridBody.find('ul.s-record-rows');
                var selectRowNumbers = selected.map(function(item) {
                    return $(item).data('rownumber');
                });

                _.forEach(rows, function(row) {
                    var $row = $(row);
                    if (_.includes(selectRowNumbers, $row.data('rownumumber'))) {
                        return $row.addClass('s-record-selected');
                    }
                    if (preActived && preActived.data('rownumber') === $row.data('rownumber')) {
                        preActived = $row.addClass('s-record-selec ' + rowSet.activeClass || '');
                    }
                });

                if (selectedAll) {
                    gridHeader.find('li.checkbox-col').addClass('s-record-selected');
                } else {
                    gridHeader.find('li.checkbox-col').removeClass('s-record-selected');
                }
            }
        }
    }

    var sort = 's-column-sort';
    var asc = 's-column-asc';
    var desc = 's-column-desc';

    function _gridHeaderEvent(gridHeader, gridBody, bodyEvt, opts) {
        gridHeader.on('click', 'li.s-record-cell', function(ev) {
            var li = $(this);
            var doSort = li.data('sort');
            var property = li.data('index');
            var direction = 'asc';
            opts.rows.preselect = opts.rows.preselect || function() { return true; };

            if (li.hasClass(sort)) {
                if (li.hasClass(asc)) {
                    li.removeClass(asc).addClass(desc);
                    direction = 'desc';
                } else {
                    li.removeClass(desc).addClass(asc);
                    direction = 'asc';
                }
            } else {
                li.addClass(sort).addClass(asc);
            }

            if (doSort !== false && property) {
                gridHeader.trigger('headerclick', property);
                gridHeader.trigger('sort', {
                    'property': property,
                    'direction': direction
                });
            }
        });
    }

    function _getSimpleGridView(options) {
        var wrapId = ['s', options.domEl.id].join('-');
        var container = $(options.domEl).empty();
        var gridWrapper = $('<div class="s-grid-panel"></div>').attr('id', wrapId);
        var gridTitleTmpl = Tmpl.titleTmpl();
        var gridHeaderTmpl = Tmpl.headerTmpl();

        var gridHeaderContainer = Tmpl.headerContainer();
        var gridBodyTmpl = Tmpl.bodyTmpl();
        var renderTmpl = Tmpl.renderTmpl();
        var renderEditTmpl = Tmpl.renderEditTmpl();
        var gridToolbarTmpl = Tmpl.pageTmpl();

        var gridTitle = options.title ? _.template(gridTitleTmpl)({
            title: options.title
        }) : null;
        var gridHeaderFn = _.template(gridHeaderTmpl);
        var gridHeader = $(gridHeaderContainer).append(gridHeaderFn({
            columns: options.columns
        }));

        var gridProp = _calcGridProp(options);
        var gridToolbar = gridProp.footer.height ? gridToolbarTmpl : null;

        gridWrapper.width(gridProp.width).prepend(gridTitle);
        var gridBody = gridWrapper.append(gridHeader)
        .append(gridBodyTmpl).find('.s-grid-body');

        gridWrapper.append(gridToolbar);
        gridWrapper.appendTo(container);

        gridProp.header.height(gridHeader.get(0).offsetHeight);
        gridBody.height(gridProp.body.height());

        var fnRender;
        if (options.checkbox) {
            fnRender = _.template(renderEditTmpl, {
                'imports': { 'pickText': pickText }
            });
        } else {
            fnRender = _.template(renderTmpl, {
                'imports': { 'pickText': pickText }
            });
            gridHeader.find('li.checkbox-col').remove();
        }

        var tableEvent = _gridBodyEvent(gridHeader, gridBody, options.selType, options.rows || {});
        tableEvent.once();
        _gridHeaderEvent(gridHeader, gridBody, tableEvent, options);

        _scrollEvent(gridHeader, gridBody);

        return {
            panel: gridWrapper,
            header: gridHeader,
            body: gridBody,
            render: function(obj) {
                var total = obj.items.length;

                gridWrapper.find('.s-record-body').eq(0).empty()
                    .width(total ? 'auto' : gridHeader.find('.s-record-header').outerWidth())
                    .height(total ? 'auto' : 1)
                    .append(fnRender(obj));

                tableEvent.setItems(obj.items);
            }
        };
    }

    function _setRowClass(rows) {
        if (rows && _.isFunction(rows.setRowClass)) {
            return rows.setRowClass;
        }
        return function(record) { return ''; };
    }

    function _setCheckboxReadonly(rows) {
        if (rows && _.isFunction(rows.checkboxReadonly)) {
            return rows.checkboxReadonly;
        }
        return function(record) { return false; };
    }

    class SimpleGridView extends Component {

        constructor(options) {
            super(options);

            this.columns = options.columns || options.columnModel;
            this._dataSet = options.dataSet;
            this.store = options.store;

            this._columns = this._initColumnProp(this.columns, options);

            var view = this.__grid__ = _getSimpleGridView({
                title: options.title,
                domEl: options.domEl,
                width: options.width,
                height: options.height,
                dataSet: options.dataSet,
                columns: this._columns,
                rows: options.rows || {},
                checkbox: options.checkbox,
                page: options.page,
                selType: '',
                multiColumnSort: ''
            });

            this._fnSetRowClass = _setRowClass(options.rows);
            this._fnCheckboxReadonly = _setCheckboxReadonly(options.rows);

            this._bindEvent(view, options);
        }

        _initColumnProp(columns, options) {
            var self = this;
            var calcWidth;
            var colFmtFn = {};

            this._flexBox = {
                count: 0,
                cols: {},
                share: 0,
                shareWidth: null,
                constWidth: options.checkbox ? CHECKBOX_WIDTH : 0
            };

            columns.forEach(function(column) {
                setColumnWidth(column);
                setColumnRender(column);
            });

            this._updateFlexBox();

            function setColumnWidth(column) {
                if (column.width === undefined) {
                    if (_.isNumber(column.flex)) {
                        self._flexBox.cols[column.dataIndex] = column;
                        self._flexBox.share += column.flex;
                        self._flexBox.count++;
                    } else {
                        column.width = _.min([_.max([column.minWidth, Utils.measureText(column.text).width + 5]), column.maxWidth]);
                    }
                }
                self._flexBox.constWidth += +column.width || 0;
            }

            function setColumnRender(column) {
                if (_.isUndefined(column.renderer)) {
                    if (_.isString(column.format)) {
                        if (column.vtype === 'number') {
                            colFmtFn[column.dataIndex] = colFmtFn[column.dataIndex]; /*||numberFormat(column.format)*/

                            column.renderer = function(value) {
                                // return colFmtFn[column.dataIndex](value);
                                return value;// TODO
                            };
                        } else if (column.vtype === 'date') {
                            colFmtFn[column.dataIndex] = colFmtFn[column.dataIndex]; /*||numberFormat(column.format)*/

                            column.renderer = function(value) {
                                // return colFmtFn[column.dataIndex](value);
                                return value;// TODO
                            };
                        } else {
                            console.error('format ' + column.dataIndex + ' but vtype is undefined');
                            column.renderer = function(value) { return value; };
                        }
                    } else {
                        column.renderer = function(value) { return value; };
                    }
                }
            }

            return columns;
        }

        _bindEvent(view, options) {
            var self = this;

            this.store.on('data-loaded', function(result, trigger, append) {
                var data = self.store._getHalfaked();

                view.render({
                    columns: self._columns,
                    items: result.data,
                    fnSetRowClass: self._fnSetRowClass,
                    fnCheckboxReadonly: self._fnCheckboxReadonly
                });

                self.fire('rendered');
            });

            this.store.on('data-loaded', function(result) {
                var el = $(self.domEl);
                var zeroMaskEl = el.find('.szse-empty-data');

                if (result.data && result.data.length === 0) {
                    if (zeroMaskEl.length !== 0) {
                        zeroMaskEl.show();
                    } else {
                        zeroMaskEl = $(Tmpl.zeroDataMask());
                        el.find('.s-grid-body').append(zeroMaskEl);
                    }
                } else {
                    if (zeroMaskEl.length !== 0) {
                        zeroMaskEl.hide();
                    }
                }
            });

            view.body.on('itemclick', function(ev, args) {
                console.log(args);
                self.fire('row-clicked', args.item, args.event);
            });

            view.body.on('itemdblclick', function(ev, args) {
                console.log(args);
                self.fire('row-dblclicked', args.item, args.event);
            });

            view.body.on('scrollend', function(ev, offset) {
                // console.log(offset);
                if (options.action && _.isFunction(options.action.scroll)) {
                    options.action.scroll(offset);
                }
                self.fire('scroll', offset);
            });

            view.header.on('headerclick', function(ev, property) {
                var col = self._columns.filter(function(column) {
                    return column.dataIndex === property;
                })[0];
                self.fire('header-clicked', col);
            });

            view.header.on('sort', function(ev, sortInfo) {
                console.log('sortInfo:', sortInfo);
                var sorts = self.store.getSortState();
                _.remove(sorts, function(sort, i) {
                    return sort.property == sortInfo.property;
                });
                sorts.unshift(sortInfo);
                console.log('sorts:', sorts);
                options.store.sort(sorts);
            });
        }

        _updateFlexBox(column) {
            var flexBox =this._flexBox;
            var isFlexCol;

            if (column) {
                isFlexCol = flexBox.cols[column.dataIndex];
                if (isFlexCol) {
                    delete flexBox.cols[column.dataIndex];
                    flexBox.count--;
                    flexBox.share = flexBox.share - column.flex;
                    flexBox.constWidth += column.width;
                } else {
                    flexBox.constWidth += column.width - column._preWidth;
                }
            }

            var calcWidth, flexCol, countColsMinWidth, colSize;
            var nextShare = [], nextSubShareWidth = 0, nextShareFlex = 0;

            if (flexBox.count) {
                colSize = this.columns.length;
                flexBox.containerWidth = _.isNumber(this.width) ? this.width - 18 : +this.width.match(/[\d|\.]+/)[0] / 100 * Utils.getDOMOffset(this.domEl).width - 18;

                calcWidth = (flexBox.containerWidth - flexBox.constWidth - CELL_PADDING * colSize) / flexBox.share;
                flexBox.shareWidth = calcWidth < FLEX_MIN_WIDTH ? FLEX_MIN_WIDTH : calcWidth;

                _.forEach(flexBox.cols, function(col) {

                    if (col.minWidth && col.minWidth > col.flex * flexBox.shareWidth) {
                        col.width = col.minWidth;
                        nextSubShareWidth += col.minWidth - flexBox.shareWidth;
                        nextShareFlex += flexBox.share - col.flex;
                    } else {
                        nextShare.push(col);
                    }
                });

                if (nextSubShareWidth) {
                    calcWidth = (calcWidth * nextShareFlex - nextSubShareWidth) / nextShareFlex;
                    flexBox.shareWidth = calcWidth < FLEX_MIN_WIDTH ? FLEX_MIN_WIDTH : calcWidth;

                    nextShare.forEach(function(col) {
                        col.width = Math.round(col.flex * flexBox.shareWidth);
                    });
                } else {
                    for (var dataIndex in flexBox.cols) {
                        flexCol = flexBox.cols[dataIndex];
                        flexCol.width = Math.round(flexCol.flex * flexBox.shareWidth);
                    }
                }
            }
        }

        getSelection() {
            return [];
        }

    }

    function titleTmpl() {
        return `<div class="s-grid-title"><%=title%></div>`;
    }

    function headerContainer() {
        return `<div class="s-grid-header"></div>`;
    }

    function headerTmpl() {
        return `<div class="s-record-header">
            <ul class="s-record-rows">
                <li class="s-record-cell checkbox-col" data-sort="false">
                    <div class="s-checkbox">
                        <label class="s-checkbox-label"></label>
                    </div>
                </li>
                <% _.forEach(columns, function(column, index) {%>
                    <li class="s-record-cell <% if (column.sortDir) { %> s-column-<%=column.sortDir%> <% } %>" data-index="<%-column.dataIndex%>" data-sort="<%=column._sortable%>">
                        <div style="width:<%-column.width%>px" class="s-column-align-<%=column.align%> s-column-cell-<%=column.dataIndex%>" title="<%=column.title || column.text%>">
                            <%=column.text%>
                        </div>
                    </li>
                <% }) %>
            </ul>
        </div>`;
    }

    function bodyTmpl() {
        return `<div class="s-grid-body">
            <div class="s-grid-view">
                <div class="s-record-body"></div>
            </div>
        </div>`;
    }

    function renderTmpl() {
        return `<% _.forEach(items, function(item, idx) { %>
            <ul class="s-record-rows <%=fnSetRowClass(item)%><% if (idx % 2 !== 0) { %>s-stripe-rows<% }%>" data-rownumber="<%=item.rownumber%>" tabindex="0">
                <% _.forEach(columns, function(column, index) { %>
                    <li class="s-record-cell" data-dataindex="<%=column.dataIndex%>">
                        <% var _cellData = column.renderer(item[column.dataIndex], {rowIndex: idx}, {data: item})%>
                        <div style="width: <%-column.width%>px;" <% if (column.align) { %> class="s-column-align-<%=column.align%>" <% } %> title="<%=pickText(_cellData)%>">
                            <%= _cellData %>
                        </div>
                    </li>
                <% }) %>
            </ul>
        <% }) %>`;
    }

    function renderEditTmpl() {
        return `<% _.forEach(items, function(item, idx) { %>
            <ul class="s-record-rows <%=fnSetRowClass(item)%> <% if (idx % 2 !== 0) { %>s-stripe-rows<% }%> <% if (fnCheckboxReadonly(item)) { %>s-readonly<% } %>" data-rownumber="<%=item.rownumber%>" tabindex="0">
                <li class="s-record-cell checkbox-col<% if (fnCheckboxReadonly(item)) { %> s-readonly<% } %>">
                    <div class="s-checkbox">
                        <label class="s-checkbox-label"></label>
                    </div>
                </li>
                <% _.forEach(columns, function(column, index) { %>
                    <li class="s-record-cell" data-dataindex="<%=column.dataIndex%>">
                        <% var _cellData = column.renderer(item[column.dataIndex], {rowIndex: idx}, {data: item})%>
                        <div style="width: <%-column.width%>px;" <% if (column.align) { %> class="s-column-align-<%=column.align%>" <% } %> title="<%=pickText(_cellData)%>">
                            <%= _cellData %>
                        </div>
                    </li>
                <% }) %>
            </ul>
        <% }) %>`;
    }

    function pageTmpl() {
        return `<div class="s-grid-toolbar s-toolbar-bottom">
            <div class="s-toolbar-text s-inline-block sp-displayInfo">暂无数据</div>
            <div class="s-toolbar-text s-inline-block">
                每页 <select class="sp-pagesize" name=""></select> 条
            </div>
            <div class="s-inline-block s-page-position-rside">
                <div class="s-toolbar-button s-btn-disabled s-inline-block">
                    <a herf="javascript:void(0)" class="s-toolbar-paging sp-first">
                        <span><<</span>
                    </a>
                </div>
                <div class="s-toolbar-button s-btn-disabled s-inline-block">
                    <a herf="javascript:void(0)" class="s-toolbar-paging sp-prev">
                        <span><</span>
                    </a>
                </div>
                <div class="s-toolbar-input s-btn-disabled s-inline-block">
                    <input type="text" name="" placeholder="" class="sp-currentPage">
                </div>
                <div class="s-toolbar-text s-inline-block sp-afterTextItem">of </div>
                <div class="s-toolbar-button s-btn-disabled s-inline-block">
                    <a herf="javascript:void(0)" class="s-toolbar-paging sp-next">
                        <span>></span>
                    </a>
                </div>
                <div class="s-toolbar-button s-btn-disabled s-inline-block">
                    <a herf="javascript:void(0)" class="s-toolbar-paging sp-last">
                        <span>>></span>
                    </a>
                </div>
            </div>
            <div class="s-toolbar-button s-btn-disabled s-inline-block s-refresh-position-rside">
                <a herf="javascript:void(0)" class="s-refresh">
                    <span>刷新</span>
                </a>
            </div>
        </div>`;
    }

    function zeroDataMask() {
        return `<div class="szse-empty-data glyphicon glyphicon-info-sign pull-left">暂无数据</div>`;
    }


    module.exports = SimpleGridView;

});
