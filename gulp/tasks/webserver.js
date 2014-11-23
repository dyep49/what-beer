var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function() {
  gulp.task('webserver', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        notify: false,
        open: false
    });
  })
}