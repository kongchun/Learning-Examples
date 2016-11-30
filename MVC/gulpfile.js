// gulp-uglify gulp-rename gulp-jshint gulp-concat gulp-clean gulp-imagemin gulp-rev gulp-cache gulp-notify gulp-rev-collector gulp-template gulp-htmlmin gulp-run-sequence
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            port: 3000, //端口
            host: '127.0.0.1', //域名
            directoryListing: {
                path: './',
                enable: true
            }
        }))
});


//使用connect启动一个Web服务器
gulp.task('connect', function() {
    connect.server({
        host: '127.0.0.1', //地址，可不写，不写的话，默认localhost
        port: 3000, //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自动刷新
    });
});
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./*.css', ['html']); //监控css文件
    gulp.watch('./*.js', ['html']); //监控js文件
    gulp.watch(['./*.html'], ['html']); //监控html文件
});
//执行gulp server开启服务器
gulp.task('server', ['connect', 'watch']);


gulp.task('default', function() {
    gulp.start('server');
});
