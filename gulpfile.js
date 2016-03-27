var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./app/scripts/main.js')
      .transform('reactify')
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('build/scripts'));
});

gulp.task('copy',function() {
    gulp.src('app/index.html')
      .pipe(gulp.dest('./'));
    gulp.src('app/assets/**/*.*')
      .pipe(gulp.dest('build/assets'));
});

gulp.task('default', ['browserify', 'copy'], function() {
    return gulp.watch('app/**/*.*', ['browserify', 'copy'])
});