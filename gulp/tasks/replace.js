var gulp = require('gulp');
var replace = require('gulp-replace');

module.exports = function() {
  gulp.task('replace', function() {
    gulp.src(['./src/scripts/**/*.*.js'])
      .pipe(replace(/^(.*?) f/, 'module.exports = /* @ngInject */ f'))
      .pipe(gulp.dest('./src/'))
  })
}




