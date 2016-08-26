var gulp = require('gulp');
var tasks = require('gulp-task-listing');
var shell = require('gulp-shell');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('find-raspberry', shell.task([
  'nmap 192.168.1.1-255 | grep raspberrypi'
]));

gulp.task('setup-raspberry', shell.task([
  'ansible-playbook playbook/pi.yml'
]));

gulp.task('default', function() {
  return tasks.withFilters(null, 'default')();
});
