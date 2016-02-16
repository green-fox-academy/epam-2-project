'use strict';

require('./gulp/gulp_karma.js');
require('./gulp/gulp_jasmine.js');
require('./gulp/gulp_jshint.js');
require('./gulp/gulp_watch.js');

var gulp = require('gulp');
var gulpUtil = require('gulp-util');

gulp.task('build', function() { console.log('Working!'); });

gulp.task('default', function() {
  return gulpUtil.log('gulp is ready');
});

// var jasmine = require('gulp-jasmine');
// var gulp = require('gulp');
//
// gulp.task('jasmine', function () {
//   return gulp.src('./spec/*[sS]pec.js')
//     .pipe(jasmine());
// });
