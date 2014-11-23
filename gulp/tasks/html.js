var gulp = require('gulp');
var reload = require('browser-sync').reload;


module.exports = function() {
  gulp.task('html', function() {
    gulp.src(['./index.html'])
      .pipe(reload({stream: true}));
  });  
};

