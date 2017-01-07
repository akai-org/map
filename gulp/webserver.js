var gulp = require('gulp');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');
var path = require('./path');

require('./build');
require('./watch');

gulp.task('connect', function() {
  connect.server({
    port: 10090,
    root: path.build.base,
    livereload: true
  });
});

gulp.task('connect:prod', function() {
  connect.server({
    port: 80,
    root: path.build.base,
    livereload: true
  });
});

gulp.task('webserver', function(callback) {
  runSequence('build:dev', 'watch', 'connect', callback);
});

gulp.task('webserver:prod', function(callback) {
  runSequence('build:dev', 'connect', callback);
});
