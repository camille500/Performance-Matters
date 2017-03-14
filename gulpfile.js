const gulp = require('gulp');
const critical = require('critical');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const fs = require('fs');

gulp.task('cssStyles', function () {
  return gulp.src('./src/dist/css/docs.css')
    .pipe(cleanCSS())
    .pipe(rename("docs.min.css"))
    .pipe(gulp.dest('./src/dist/css/'));
});

gulp.task('cssCritical', () => {
	const htmlPage = fs.readFileSync('./src/index.html');
	critical.generate({
		inline: false,
		base: './',
		html: htmlPage,
    minify: true,
		src: './src/_base/layout.html',
		css: ['./src/dist/css/bootstrap.css', './src/dist/css/docs.css'],
		dest: './src/dist/css/critical.css',
		width: 1920,
		height: 1080
	});
});
