const { series, src, dest } = require('gulp');
const config = require('./config')

function clean_font() {
  const del = require('del')
  return del(config.dest + 'font')
}

function font() {
  return src(config.src + 'font/**/*')
    .pipe(dest(config.dest + 'font'))
}

exports.font = series(clean_font, font);