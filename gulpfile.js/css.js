const { lastRun, series, src, dest } = require('gulp');
const config = require('./config')

function clean_css() {
  const del = require('del')
  return del(config.dest + 'css/*', { force: true })
}

function css(cb) {
  const rename = require('gulp-rename')
  const postcss = require('gulp-postcss')
  const cssFor = require('postcss-for')
  const cssImport = require('postcss-partial-import')
  const cssVars = require('postcss-simple-vars')
  const cssNested = require('postcss-nested')
  const cssMixins = require('postcss-mixins')
  const cssExtend = require('postcss-extend')
  const autoprefixer = require('autoprefixer')
  const cssclean = require('postcss-clean')
  const plugins = [
    autoprefixer(),
    cssImport(),
    cssMixins(),
    cssVars({ silent: true }),
    cssNested(),
    cssFor(),
    cssExtend(),
    cssclean()
  ]

  return src(config.src + 'css/[!_]*.scss', {
    since: lastRun(css),
    sourcemaps: true
  })
    .pipe(postcss(plugins))
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(dest(config.dest + 'css', {
      sourcemaps: './maps'
    }))
}

exports.clean_css = clean_css;
exports.build_diff = css;
exports.build_all = series(clean_css, css);