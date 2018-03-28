var gulp = require('gulp');
var runSequence = require('run-sequence');
var path = require('./path');

require('./clean');
require('./bower');
require('./jshint');
require('./html');
require('./js');
require('./libs');
require('./sass');
require('./images');

gulp.task('generateAliases', function() {
  var fs = require('fs');
  var data = JSON.parse( fs.readFileSync("./app/resources/json/base-search-data.json") );
  var output = [];

  data.forEach(el => {
    var obj = {
      name: el.name,
      campus: el.campus,
      buildingId: el.buildingId
    };
    if(el.roomId) {
      obj.roomId = el.roomId;
    }
    output.push(obj);
    el.aliases.forEach(alias => {
      var obj2 = {
        name: alias,
        campus: el.campus,
        buildingId: el.buildingId,
        roomId: el.roomId
      }
      output.push(obj2);
    })
  });
  fs.writeFileSync('./app/resources/json/search-data.json', JSON.stringify(output));
}

);

var build = function(debug, callback) {
  if (debug) {
    runSequence('clean', 'bower', 'jshint', 'getJson', 'generateAliases', ['libs', 'html', 'sass', 'js:dev', 'images:dev'], callback);
  } else {
    runSequence('clean', 'bower', 'jshint', 'getJson', 'generateAliases', ['libs', 'html', 'sass', 'js:prod', 'images:prod'], callback);
  }
};

gulp.task('getJson', function() {
  return gulp.src(path.app + '/**/*.json')
             .pipe(gulp.dest(path.build.base));
});

gulp.task('build:dev', function(callback) {
  build(true, callback);
});

gulp.task('build:prod', function(callback) {
  build(false, callback);
});
