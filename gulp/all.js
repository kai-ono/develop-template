module.exports = function (gulp) {
  gulp.task('all', [ 'html', 'ejs', 'img', 'css', 'js', 'font' ])
  gulp.task('default', [ 'server', 'watch' ])
}
