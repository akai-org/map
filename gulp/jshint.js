var gulp = require('gulp');
var jshint = require('gulp-jshint');
var path = require('./path');

gulp.task('jshint', function() {
  return gulp.src(path.app + '/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
