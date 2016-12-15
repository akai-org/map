var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var path = require('./path');

gulp.task('lib:js', function() {
  return gulp.src([
      path.bower + '/jquery/dist/jquery.min.js',
      path.bower + '/angular/angular.min.js',
      path.bower + '/angular-ui-router/release/angular-ui-router.min.js'
    ])
    .pipe(gulp.dest(path.build.js + '/lib'));
});

gulp.task('requirejs', function() {
  return gulp.src(path.bower + '/requirejs/require.js')
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(rename('require.min.js'))
    .pipe(gulp.dest(path.build.js + '/lib'));
});

gulp.task('libs', ['lib:js', 'requirejs']);
