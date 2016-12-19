var gulp = require('gulp');
var path = require('./path');

gulp.task('html:partials', function() {
  var paths = [
    path.app + '/**/*.html',
    '!'+path.app + '/index.html'
  ];
  return gulp.src(paths)
    .pipe(gulp.dest(path.build.html));
});

gulp.task('html',['html:partials'], function() {
  return gulp.src(path.app + '/**/index.html')
    .pipe(gulp.dest(path.build.base));
});
