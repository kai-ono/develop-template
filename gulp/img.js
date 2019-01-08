module.exports = function (gulp) {
  const config = require('./config/config')

  gulp.task('clean_img', function () {
    const del = require('del')
    return del(config.dest + 'img/*', { force: true })
  })

  gulp.task('img', ['clean_img'], function () {
    return gulp.src(config.src + 'img/**/*')
      .pipe(gulp.dest(config.dest + 'img'))
  })
}
