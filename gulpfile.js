"use strict";

var gulp = 	require('gulp');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var webpack = require('gulp-webpack');
var path	= require('path');

gulp.task('webpack', function() {
	return gulp.src('src/*.ts')
		.pipe(webpack({
			entry: {
				app: './src/bootstrap.ts'
			},
			output: {
				path: __dirname + '/',
				filename: 'bundle.js'
			},
			resolve: {
				extensions: ['', '.js', '.ts']
			},
			module: {
				loaders: [{
					test: /\.ts/, loaders: ['ts'], exclude: /node_modules/
				}]
			}
		}))
		.pipe(gulp.dest(function(file){
			console.log("Updated bundle file at ",path.resolve(file.path));
			return path.resolve(file.path,"../","build");
		}));
});

gulp.task('watch-ng2-components', function() {
	gulp.watch(['src/**/**/*.ts',
		] , ['webpack']);
});

gulp.task('bundler', ['webpack', 'watch-ng2-components']);
