module.exports = function (gulp) {
  const config = require('./config/config')

  gulp.task('clean_font', function () {
    const del = require('del')
    return del(config.dest + 'font')
  })

  gulp.task('font', ['clean_font'], function () {
    return gulp.src(config.src + 'font/**/*')
      .pipe(gulp.dest(config.dest + 'font'))
  })
}
