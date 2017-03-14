var gulp = require('gulp');
var path = require('./path');

require('./html');
require('./css');
require('./js');
require('./sass');

gulp.task('watch', function() {
  gulp.watch(path.app + '/**/*.html', ['html']);
  gulp.watch(path.app + '/**/*.css', ['css']);
  gulp.watch(path.app + '/**/*.js', ['js:dev']);
  gulp.watch(path.app + '/**/*.scss', ['sass']);
  gulp.watch(path.app + '/**/*', ['images:dev']);
});
