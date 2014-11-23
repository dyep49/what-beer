var gulp = require('./gulp')([
  'webserver',
  'html',
  'watch',
  'browserify',
  'vendor',
  'sass',
  'jshint',
  'nghtml2js',
  'replace'
])

gulp.task('default', ['nghtml2js', 'sass', 'jshint', 'vendor', 'browserify', 'webserver', 'watch']);