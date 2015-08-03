'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync']);

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3300",
        files: ["public/**/*.*"]
	});
});
gulp.task('nodemon', function (cb) {
	var started = false;
	
	return nodemon({script: 'server.js'})
		.on('start', function () {
			// to avoid nodemon being started multiple times
			if (!started) {
				cb();
				started = true; 
			} 
		});
});