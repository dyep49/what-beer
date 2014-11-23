var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var size = require('gulp-size');
var plumber = require('gulp-plumber');
var reload = require('browser-sync').reload;


module.exports = function() {
  gulp.task('sass', function () {
    gulp.src('src/**/*.scss')
      .pipe(sass())
      .pipe(minifycss())
      .pipe(gulp.dest('./build/'))
      .pipe(size())
      .pipe(reload({stream: true}));
  });
}