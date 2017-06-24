var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var path = require('./path');

gulp.task('lib:js', function() {
  return gulp.src([
      path.bower + '/jquery/dist/jquery.min.js',
      path.bower + '/angular/angular.min.js',
      path.bower + '/angular-ui-router/release/angular-ui-router.min.js',
      path.bower + '/leaflet/dist/leaflet.js',
      path.bower + '/angular-leaflet-directive/dist/angular-leaflet-directive.min.js',
      path.bower + '/algoliasearch/dist/algoliasearch.angular.min.js',
      path.bower + '/perfect-scrollbar/js/perfect-scrollbar.min.js',
      path.bower + '/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js'
    ])
    .pipe(gulp.dest(path.build.js + '/lib'));
});

gulp.task('lib:css', function() {
  return gulp.src([
      path.bower + '/leaflet/dist/leaflet.css',
      path.bower + '/perfect-scrollbar/css/perfect-scrollbar.min.css'
    ])
    .pipe(gulp.dest(path.build.css + '/lib'));
});

gulp.task('requirejs', function() {
  return gulp.src(path.bower + '/requirejs/require.js')
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(rename('require.min.js'))
    .pipe(gulp.dest(path.build.js + '/lib'));
});

gulp.task('libs', ['lib:js', 'lib:css', 'requirejs']);
