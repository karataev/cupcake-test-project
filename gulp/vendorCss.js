var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config');
var merge = require('merge-stream');

module.exports = function vendorCss() {
  var cssStream = gulp.src([
    'node_modules/normalize-css/normalize.css',
    'node_modules/bootstrap/dist/css/bootstrap.css'
  ])
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(config.styles.dist));

  var fontsStream = gulp.src([
    'node_modules/bootstrap/dist/fonts/*.*'
  ])
    .pipe(gulp.dest('./dist/fonts/'));

  return merge(cssStream, fontsStream);
}