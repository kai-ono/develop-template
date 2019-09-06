const { series, src, dest } = require('gulp');
const config = require('./config')

function server() {
  const webserver = require('gulp-webserver')
  return src('./dest')
    .pipe(webserver({
      livereload: true
    }))
}

exports.server = server;