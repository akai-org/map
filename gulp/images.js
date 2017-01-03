var gulp = require('gulp');
var path = require('./path');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  var paths = [
    path.app + '/**/*.jpg',
    path.app + '/**/*.gif',
    path.app + '/**/*.svg',
    path.app + '/**/*.png'
  ];
  return gulp.src(paths)
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.base));
});
