module.exports = function(gulp) {
  gulp.task('eslint', function() {
    const eslint = require('gulp-eslint');
    const plumber = require('gulp-plumber');

    gulp.src('src/js/*.js')
      .pipe(plumber())
      .pipe(eslint({useEslintrc: true}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });

  gulp.task('babel', ['eslint'], function() {
    const del = require('del');
    const rename = require('gulp-rename');
    const babelify = require('babelify');
    const browserify = require('browserify');
    const source = require('vinyl-source-stream');
    const buffer = require('vinyl-buffer');
    const uglify = require('gulp-uglify');

    del('dest/js/*');

    browserify({
        entries: ['src/js/script.js'],
        transform: [['babelify', {
          comments: false
        }]]
      })
      .bundle()
      .pipe(source('script.js'))
      .pipe(buffer())
      .pipe(gulp.dest('dest/js/'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('dest/js/'));
  });
}