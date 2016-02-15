'use strict';

var batch = require('gulp-batch');
var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function () {
    watch('**/*.js', batch(function (events, done) {
        gulp.start('jasmine', done);
    }));
});
