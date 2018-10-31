module.exports = function (gulp) {
  const config = require('./config/config')

  gulp.task('eslint', function () {
    const eslint = require('gulp-eslint')
    const plumber = require('gulp-plumber')

    gulp.src(config.srcPc + 'js/**/*.js')
      .pipe(plumber())
      .pipe(eslint({
        useEslintrc: true
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  })

  gulp.task('cleanjs', function () {
    const del = require('del')
    return del(config.destPc + 'js/*', { force: true })
  })

  gulp.task('js', [ 'cleanjs', 'eslint' ], function () {
    const babel = require('gulp-babel')
    const rename = require('gulp-rename')
    const uglify = require('gulp-uglify')

    gulp.src('src/js/*.js')
      .pipe(babel({
        'presets': [ 'es2015' ],
        'plugins': [ 'transform-es2015-modules-umd' ],
        'comments': false
      }))
      .pipe(gulp.dest('dest/js/'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(uglify())
      .pipe(gulp.dest('dest/js/'))
  })

  gulp.task('lib', function () {
    const del = require('del')

    del(config.dest + 'lib/**/*', { force: true })

    return gulp.src(config.srcPc + 'lib/**/*')
      .pipe(gulp.dest(config.destPc + 'lib/'))
  })
}
