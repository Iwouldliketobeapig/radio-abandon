var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var less = require('gulp-less');

gulp.task('default', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('lib/radioAbandon'));
});

gulp.task('less', function () {
  return gulp.src('./radioAbandon/*.less')
    .pipe(gulp.dest('lib/radioAbandon'))
})