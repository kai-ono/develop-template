const { lastRun, series, src, dest } = require('gulp');
const config = require('./config')

function clean_img() {
  const del = require('del')
  return del(config.dest + 'img/*', { force: true })
}

function img() {
  return src(config.src + 'img/**/*', {
    since: lastRun(img),
  })
    .pipe(dest(config.dest + 'img'))
}

exports.build_diff = img;
exports.build_all = series(clean_img, img);