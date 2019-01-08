module.exports = function (gulp) {
  const config = require('./config/config')

  gulp.task('clean_html', function () {
    const del = require('del')
    const cleanDest = (config.isSp) ? config.dest + '**/*.html' : [config.dest + '**/*.html', '!' + config.destSp + '**/*.html']
    return del(cleanDest, { force: true })
  })

  gulp.task('html', ['clean_html'], function () {
    return gulp.src(config.src + '**/*.html')
      .pipe(gulp.dest(config.dest))
  })

  gulp.task('ejs', ['clean_html'], function () {
    const ejs = require('gulp-ejs')

    return gulp.src([config.src + '**/*.ejs', '!' + config.src + '**/_*.ejs'])
      .pipe(ejs({}, {}, {ext: '.html'}))
      .pipe(gulp.dest(config.dest))
  })
}
