
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// var mocha = require('gulp-mocha');
var buffer = require('vinyl-buffer');
var connect = require('gulp-connect');

var BASE_DIR = './dist';
var config = {
    dest: './dist',
};

gulp.task('browserify', () => {
    return browserify({
        // 入口文件
        entries: './exports.js',
        // 输出UMD接口规范的名称
        standalone: 'cn.szse.chart.extends',
        debug: true
    })
    .transform('babelify', {
        presets: ['es2015']
    })
    .bundle()
    .pipe(source('cn.szse.chart.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
        loadMaps: true
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(uglify())
    .pipe(rename('cn.szse.chart.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest));
});

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 3600,
        livereload: true
    })
});

gulp.task('js', function() {
    gulp.src('./dist/**/*.js')
    .pipe(connect.reload());
});

gulp.task('ws-watch', function() {
    gulp.watch('./dist/**/*.js', ['js']);
    gulp.watch('./src/cn/szse/chart/**/*.js', ['browserify']);
});

gulp.task('serve', ['browserify', 'connect', 'ws-watch']);

/*gulp.task('browserify', () => {
    return browserify({
        entries: './exports.js',
        standalone: 'cn.szse.chart.extends'
    })
    .bundle()
    .pipe(source('cn.szse.chart.js'))
    .pipe(gulp.dest(BASE_DIR));
});

gulp.task('babel', ['browserify'], () => {
    return gulp.src('dist/cn.szse.chart.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(rename('cn.szse.chart.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(BASE_DIR));
});*/

gulp.task('compile', ['babel'], () => {
	console.log("编译完成!");
});

gulp.task('test', () => {
	return gulp.src([
        'test/**/*.test.js'
	]).pipe(mocha());
});