const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyJs = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');


function buildStyles() {
  return src('scss/**/*.scss')
  .pipe(sass())
  .pipe(dest('css'));
}



const bundleJs = () => {
  return src('./js/**/*.js' )
  .pipe(sourceMaps.init())
  .pipe(minifyJs())
  .pipe(concat('bundle.js'))
  .pipe(sourceMaps.write())
  .pipe(dest('./dist/js'));
}

function watchTask() {
  watch(['scss/**/*.scss', '*.html'], buildStyles)
  watch(['./js/**/*.js'], bundleJs);

}

// const devWatch = () => {
//   watch('./js/**/*.js, bundleJs');
// }

exports.default = series(buildStyles, bundleJs, watchTask);
// exports.bundleJs = bundleJs;
// exports.devWatch = devWatch;
