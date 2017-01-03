var gulp = require('gulp');
var cssnano = require('gulp-cssnano');

var path = require('./path');

gulp.task('css', function() {
  return gulp.src(path.app + '/**/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest(path.build.css));
});
