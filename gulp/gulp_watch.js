'use strict';

var batch = require('gulp-batch');
var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');



gulp.task('watch', function () {
    watch('**/*.js', batch(function (events, done) {
        gulp.start('jasmine', done);
    }));
    watch('**/*.scss', batch(function (events, done) {
        gulp.start('sass', done);
    }));
});
