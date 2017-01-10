// gulp-uglify gulp-rename gulp-jshint gulp-concat gulp-clean gulp-imagemin gulp-rev gulp-cache gulp-notify gulp-rev-collector gulp-template gulp-htmlmin gulp-run-sequence
var gulp = require('gulp');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var clean = require('gulp-clean');

var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");


//使用connect启动一个Web服务器
gulp.task('connect', function() {
    connect.server({
        host: '127.0.0.1', //地址，可不写，不写的话，默认localhost
        port: 3000, //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自npm ins动刷新
    });
});


gulp.task('css', function() {
    return gulp.src('src/**/*.css')
        .pipe(gulp.dest('build'));

});

gulp.task('js', () => {
    return gulp.src('src/**/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015', 'react', 'stage-0']
        }))
        .pipe(gulp.dest('build'));
});



gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest("build"));
});

gulp.task('reload', function() {
    return gulp.src('build/*.*').pipe(connect.reload());
});



gulp.task('watch', function() {
    gulp.watch('src/**/*.css', ['css']);
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);

    gulp.watch('build/*.*', ['reload']);
});



gulp.task('clean', function() {
    return gulp.src(['build'], {
        read: false
    }).pipe(clean());
});
gulp.task('build', ['clean'], function() {
    return gulp.start('js', 'css', 'html');
});

//执行gulp server开启服务器
gulp.task('server', ['connect', 'watch']);


gulp.task('default', function() {
    gulp.start('server');
});


gulp.task('browserify', function() {
    return browserify('src/router_browserify.js')
        .transform(babelify, {
            presets: ['es2015', 'react', 'stage-0']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build'));
});