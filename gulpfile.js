var gulp = require('gulp');
var critical = require('critical');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var fs = require('fs');

const config = {
	srcPath: './src',
	assetsPath: './src/assets',
	distPath: `./src/dist`,
	buildPath: './src/build'
};

gulp.task('css:critical', () => {
	const html = fs.readFileSync('./src/index.html');
	critical.generate({
		inline: false,
		base: './',
		html: html,
    minify: true,
		src: './src/_base/layout.html',
		css: ['./src/dist/css/bootstrap.css', './src/dist/css/docs.css'],
		dest: './src/dist/css/critical.css',
		width: 1920,
		height: 1080
	});
});
