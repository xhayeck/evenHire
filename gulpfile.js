var gulp = require('gulp');

//Include our plugins
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

//Lint task (need to enter .js source)
gulp.task('lint', function() {
  return gulp.src('')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//Compile our Sass into CSS (need to enter .scss source)
gulp.task('styles', ['clean'], function() {
  return gulp.src('assets/styles/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/styles/'));
});

//Concatenante and minify JS
gulp.task('scripts', ['clean'], function() {
  return gulp.src('')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

//Clean the dist folder
gulp.task('clean', function() {
  return gulp.src('dist/')
    .pipe(clean());
});

//Runs these tasks everytime there is a change
gulp.task('watch', function() {
  gulp.watch('', ['lint', 'scripts']);
  gulp.watch('./assets/styles/*.scss', ['styles']);
});

gulp.task('default', ['lint', 'styles', 'scripts', 'watch']);
