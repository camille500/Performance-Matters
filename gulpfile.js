var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src(['./src/assets/js/vendor/jquery.min.js', './src/dist/js/bootstrap.js', './src/assets/js/docs.min.js'])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/dist/js/'));
});
