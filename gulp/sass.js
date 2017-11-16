var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

var path = require('./path');

gulp.task('sass', function () {
 return gulp.src(path.app + '/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(concat('style.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(cssnano())
  .pipe(sourcemaps.write())
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest(path.build.css));
});
