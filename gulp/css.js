var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

require('./sass');

var path = require('./path');


gulp.task('css', ['sass'], function() {
  return gulp.src(path.build.css + '/**/*.css')
    .pipe(autoprefixer())
    // .pipe(cssnano())
    .pipe(gulp.dest(path.build.css));
});
