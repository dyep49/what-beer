var gulp = require('gulp');
var ngHtml2Js = require('gulp-ng-html2js');
var concat = require('gulp-concat');
var htmlMin = require('gulp-minify-html');
var uglify = require('gulp-uglify');


module.exports = function() {

  gulp.task('nghtml2js', function() {

    gulp.src('./src/**/*.html')
      .pipe(htmlMin({
        empty: true,
        spare: true,
        quotes: true
      }))
      .pipe(ngHtml2Js({
        moduleName: 'partials',
      }))
      .pipe(concat('partials.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./src/partials/'))
  })
}