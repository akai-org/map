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

var build = function(callback) {
    runSequence('clean', 'bower', 'jshint', ['libs', 'html', 'sass', 'css', 'js', 'images'], callback);
};

gulp.task('build:dev', function(callback) {
  build(callback);
});
