var gulp = require('gulp');
var runSequence = require('run-sequence');
var path = require('./path');

require('./clean');
require('./bower');
require('./jshint');
require('./html');
require('./js');
require('./libs');
require('./sass');
require('./images');

var build = function(debug, callback) {
  if (debug) {
    runSequence('clean', 'bower', 'jshint', 'getJson', ['libs', 'html', 'sass', 'js:dev', 'images:dev'], callback);
  } else {
    runSequence('clean', 'bower', 'jshint', 'getJson', ['libs', 'html', 'sass', 'js:prod', 'images:prod'], callback);
  }
};

gulp.task('getJson', function() {
  return gulp.src(path.app + '/**/*.json')
             .pipe(gulp.dest(path.build.base));
});

gulp.task('build:dev', function(callback) {
  build(true, callback);
});

gulp.task('build:prod', function(callback) {
  build(false, callback);
});
