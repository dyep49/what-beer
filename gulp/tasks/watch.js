var gulp = require('gulp');

module.exports = function() {
  
  gulp.watch(['./src/scripts/**/*.js'], ['jshint', 'browserify'])

  gulp.watch('src/**/*.scss', ['sass']);

  gulp.watch('src/**/*.html', ['nghtml2js', 'browserify']);

  gulp.watch(['./index.html'], ['html']);

}