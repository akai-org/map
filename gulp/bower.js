var gulp = require('gulp');
var bower = require('gulp-bower');

var path = require('./path');

gulp.task('bower', function() {
  return bower();
});
