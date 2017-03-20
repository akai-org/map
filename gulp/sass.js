var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var path = require('./path');

gulp.task('sass', function () {
 return gulp.src(path.app + '/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(concat('style.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(path.build.css));
});
