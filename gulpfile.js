const gulp = require('gulp');
const critical = require('critical');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const fs = require('fs');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const concatCss = require('gulp-concat-css');
const htmlmin = require('gulp-htmlmin');

gulp.task('minifyHTML', function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('src/'));
});

gulp.task('compressImages', () =>
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/img/'))
);

gulp.task('imgToWebp', () =>
    gulp.src('src/assets/img/*.jpg')
        .pipe(webp())
        .pipe(gulp.dest('src/assets/img/'))
);

gulp.task('concatCSS', function () {
  return gulp.src(['./src/dist/css/docs.css', './src/dist/css/fonts.css'])
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('./src/dist/css/'));
});

gulp.task('cleanCSS', function () {
  return gulp.src('./src/dist/css/bundle.css')
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
		css: ['./src/dist/css/bootstrap.min.css', './src/dist/css/docs.min.css'],
		dest: './src/dist/css/critical.css',
		width: 1920,
		height: 1080
	});
});
