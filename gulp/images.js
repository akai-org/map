var gulp = require('gulp');
var path = require('./path');
var imagemin = require('gulp-imagemin');
var flatten = require('gulp-flatten');

var buildImages = function(debug) {
  var paths = [
    path.app + '/**/*.jpg',
    path.app + '/**/*.gif',
    path.app + '/**/*.svg',
    path.app + '/**/*.png',
    '!'+path.img + '/{favicon,favicon/**,favicon/**/*}'
  ];
  var images = gulp.src(paths);

  if (!debug) {
    images = images.pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({ plugins: [ { removeViewBox: false } ] })
    ]));
  }

  images = images.pipe(gulp.dest(path.build.base));

  return images;
};

gulp.task('images:favicon', function() {
  return gulp.src(path.img + '/favicon/**/*')
    .pipe(flatten())
    .pipe(gulp.dest(path.build.base));
});

gulp.task('images:dev', ['images:favicon'], function() {
  return buildImages(true);
});

gulp.task('images:prod', ['images:favicon'], function() {
  return buildImages(false);
});
