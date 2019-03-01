module.exports = function (gulp) {
  const config = require('./config/config')

  gulp.task('eslint', function () {
    const eslint = require('gulp-eslint')
    const plumber = require('gulp-plumber')

    gulp.src(config.src + 'js/**/*')
      .pipe(plumber())
      .pipe(eslint({
        useEslintrc: true
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  })

  gulp.task('cleanjs', function () {
    const del = require('del')
    const cleanDest = (config.isSp) ? config.dest + 'js/*' : [config.dest + 'js/*', '!' + config.destSp + 'js/*']
    return del(cleanDest, { force: true })
  })

  gulp.task('js', [ 'cleanjs', 'eslint' ], function () {
    const rename = require('gulp-rename')
    const minify = require('gulp-babel-minify')
    const browserify = require('browserify')
    const source = require('vinyl-source-stream')
    const buffer = require('vinyl-buffer')

    browserify(config.src + 'js/script.js')
      .transform('babelify', {
        presets: [
          ['@babel/preset-env', {
            'useBuiltIns': 'usage'
          }]
        ],
        'comments': false
      })
      .bundle()
      .pipe(source('script.js'))
      .pipe(buffer())
      .pipe(gulp.dest(config.dest + 'js'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(minify({
        mangle: {
          keepClassName: true
        }
      }))
      .pipe(gulp.dest(config.dest + 'js'))
  })

  gulp.task('lib', function () {
    const del = require('del')

    del(config.dest + 'lib/**/*', { force: true })

    return gulp.src(config.src + 'lib/**/*')
      .pipe(gulp.dest(config.dest + 'lib/'))
  })
}
