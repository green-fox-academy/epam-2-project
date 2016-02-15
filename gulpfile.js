'use strict';

require('./gulp/gulp_karma.js');
require('./gulp/gulp_jasmine.js');
require('./gulp/gulp_jshint.js');
require('./gulp/gulp_watch.js');

var gulp = require('gulp');

gulp.task('build', function () { console.log('Working!'); });
