var gulp = require('gulp');
var path = require('./path');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var stripDebug = require('gulp-strip-debug');

var buildJavaScript = function(debug) {
  var javaScript = gulp.src(path.app + '/**/*.js');

  if (!debug) {
    javaScript = javaScript.pipe(uglify({
      preserveComments: 'license'
    }).on('error', util.log));
  }

  javaScript = javaScript.pipe(stripDebug())
                         .pipe(gulp.dest(path.build.js));

  return javaScript;
};

gulp.task('js:dev', function() {
  return buildJavaScript(true);
});

gulp.task('js:prod', function() {
  return buildJavaScript(false);
});
