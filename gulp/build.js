var gulp = require('gulp');
var runSequence = require('run-sequence');
var path = require('./path');

require('./clean');
require('./bower');
require('./jshint');
require('./html');
require('./css');
require('./js');
require('./libs');
require('./sass');
require('./images');

var build = function(debug, callback) {
  if (debug) {
    runSequence('clean', 'bower', 'jshint', ['libs', 'html', 'sass', 'css', 'js:dev', 'images:dev'], callback);
  } else {
    runSequence('clean', 'bower', 'jshint', ['libs', 'html', 'sass', 'css', 'js:prod', 'images:prod'], callback);
  }
};

gulp.task('build:dev', function(callback) {
  build(true, callback);
});

gulp.task('build:prod', function(callback) {
  build(false, callback);
});
