var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('styles', function () {
  return gulp.src('./src/dist/css/docs.css')
    .pipe(cleanCSS())
    .pipe(rename("docs.min.css"))
    .pipe(gulp.dest('./src/dist/css/'));
});
