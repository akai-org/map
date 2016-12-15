var gulp = require('gulp');
var path = require('./path');

gulp.task('html', function() {
  return gulp.src(path.app + '/**/*.html')
    .pipe(gulp.dest(path.build.html));
});
