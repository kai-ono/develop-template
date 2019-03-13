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
    const webpackStream = require('webpack-stream')
    const mode = (config.env.dev) ? 'development' : 'production'

    return gulp.src(config.src + 'js/script.js')
      .pipe(webpackStream({
        mode: mode,
        /**
         * @babel/polyfillは重いのでfetchとpromiseだけ追加。
         * preset-envのuseBuiltInsを'usage'で使う場合、コード内にPromiseが存在しないとpolyfillが追加されないため、
         * fetchの場合は別途promiseのpolyfillを読み込む必要がある。
         * またusageの動作には不安があるため一旦使用を保留。
         */
        entry: ['core-js/fn/promise', 'whatwg-fetch', config.src + 'js/script.js'],
        output: {
          filename: 'script.js'
        },
        module: {
          rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-modules-umd']
              }
            }
          }]
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
