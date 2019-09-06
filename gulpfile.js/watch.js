const { watch, task } = require('gulp');
const config = require('./config')

function watchAll() {
  watch(config.src + '**/*.html', task('html_diff'))
  watch(config.src + '**/*.ejs', task('ejs_diff'))
  watch(config.src + 'img/*', task('img_diff'))
  watch(config.src + 'css/**/*.scss', task('css_diff'))
  watch(config.src + 'js/**/*.js', task('js'))
}

exports.watch = watchAll;