var gulp = require('./gulp')([
  'webserver',
  'html',
  'watch',
  'browserify',
  'vendor',
  'sass'
])

gulp.task('default', ['vendor', 'browserify', 'webserver', 'watch']);