var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        host: '127.0.0.1', //地址，可不写，不写的话，默认localhost
        port: 3000, //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自npm ins动刷新
    });
});
gulp.task('reload', function() {
    return gulp.src('*.*').pipe(connect.reload());
});

gulp.task('watch', function() {

    gulp.watch('*/*.*', ['reload']);
});

//执行gulp server开启服务器
gulp.task('server', ['connect', 'watch']);


gulp.task('default', function() {
    gulp.start('server');
});