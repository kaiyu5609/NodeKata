var express = require('express');
var router = express.Router();

var database = require('./database');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Candlestick' });
});

router.get('/test', function(req, res, next) {
    res.render('unit-test', { title: 'unit-test' });
});

router.get('/array', function(req, res, next) {
    res.render('array', { title: 'arrray' });
});

function Logger() {
    return {
        log: function(req) {
            console.log('query:', req.query);
            console.log('body:', req.body);
        }
    };
}

router.get('/me', function(req, res, next) {
    Logger().log(req);

    res.json({
        success: true,
        erroCode: null,
        message: null,
        data: [{
            username: 'dhuang01.oth',
            age: '28',
            sex: '男',
            job: 'IT'
        }]
    });
});

router.post('/me/update', function(req, res, next) {
    Logger().log(req);

    res.json({
        success: true,
        erroCode: null,
        message: null,
        data: [{
            username: 'dhuang01.oth',
            age: req.body.age || '',
            sex: '男',
            job: req.body.job || ''
        }]
    });
});

router.get('/query/kline-data-1', function(req, res, next) {
    res.json({
        success: true,
        erroCode: null,
        message: null,
        data: database.getKlineData1()
    });
});

router.get('/query/kline-data-2', function(req, res, next) {
    res.json({
        success: true,
        erroCode: null,
        message: null,
        data: database.getKlineData2()
    });
});

module.exports = router;
