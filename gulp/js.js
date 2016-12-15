var gulp = require('gulp');
var path = require('./path');

var buildJavaScript = function() {
  var javaScript = gulp.src(path.app + '/**/*.js');
  javaScript = javaScript.pipe(gulp.dest(path.build.js));
  return javaScript;
};

gulp.task('js', function() {
  return buildJavaScript();
});
