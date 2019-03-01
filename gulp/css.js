module.exports = function (gulp) {
  const config = require('./config/config')

  gulp.task('clean_css', function () {
    const del = require('del')
    return del(config.dest + 'css/*', { force: true })
  })

  gulp.task('css', ['clean_css'], function () {
    const rename = require('gulp-rename')
    const postcss = require('gulp-postcss')
    const cssFor = require('postcss-for')
    const cssImport = require('postcss-partial-import')
    const cssVars = require('postcss-simple-vars')
    const cssNested = require('postcss-nested')
    const cssMixins = require('postcss-mixins')
    const autoprefixer = require('autoprefixer')
    const sourcemaps = require('gulp-sourcemaps')
    const csswring = require('csswring')
    const plugins = [
      autoprefixer(),
      cssImport(),
      cssMixins(),
      cssVars({ silent: true }),
      cssNested(),
      cssFor(),
      csswring()
    ]

    return gulp.src(config.src + 'css/[!_]*.scss')
      .pipe(sourcemaps.init())
      .pipe(postcss(plugins))
      .pipe(rename({
        extname: '.css'
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.dest + 'css'))
  })
}
