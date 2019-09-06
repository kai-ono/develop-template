const { lastRun, series, src, dest } = require('gulp');
const config = require('./config')

function clean_html() {
  const del = require('del')
  const cleanDest = (config.isSp) ? config.dest + '**/*.html' : [config.dest + '**/*.html', '!' + config.destSp + '**/*.html']
  return del(cleanDest, { force: true })
}

function html() {
  return src(config.src + '**/*.html', {
    since: lastRun(html),
  })
    .pipe(dest(config.dest))
}

function ejs() {
  const ejsmod = require('gulp-ejs')
  return src([config.src + '**/*.ejs', '!' + config.src + '**/_*.ejs'], {
    since: lastRun(ejs),
  })
    .pipe(ejsmod({}, {}, { ext: '.html' }))
    .pipe(dest(config.dest))
}

exports.html_copy_diff = html;
exports.html_copy_all = series(clean_html, html);
exports.ejs_build_diff = ejs;
exports.ejs_build_all = series(clean_html, ejs);