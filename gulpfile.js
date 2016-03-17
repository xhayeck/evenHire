var gulp = require('gulp');
//Include our plugins
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var del = require('del');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var mocha = require('gulp-mocha');
var Server = require('karma').Server;
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var concatCss = require('gulp-concat-css');

var libraries = [
  // './client/assets/libs/**/*.js', moved angular library to node modules
  './node_modules/angular/angular.min.js',
  './node_modules/angular-ui-router/release/angular-ui-router.min.js',
  './node_modules/angular-animate/angular-animate.min.js',
  './node_modules/angular-material/angular-material.js',
  './node_modules/angular-aria/angular-aria.js',
  './node_modules/ng-dialog/js/ngDialog.min.js'
];

var stylesheets = [
  './node_modules/ng-dialog/css/ngDialog.min.css',
  './node_modules/ng-dialog/css/ngDialog-theme-default.min.css',
  './node_modules/angular-material/angular-material.min.css',
  './client/dist/styles/main.css'
];

//Clean out the dist folder
gulp.task('clean', function() {
  return del(['client/dist/']);
});

//Lint js in client dir, not used
// gulp.task('lint', function() {
//   return gulp.src('./client/**/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });

//Concatenante js libraries
gulp.task('libs', function() {
  return gulp.src(libraries)
    .pipe(concat('./libs.js'))
    .pipe(gulp.dest('./client/dist/'));
  })

//Start node server with nodemon
gulp.task('serve', function() {
  nodemon({script: 'index.js', ignore: 'node_modules/**/*.js'});
});

//Concatenante and minify JS
gulp.task('scripts', function() {
  return gulp.src(['./client/**/*.js', '!./client/dist/**/*.js', '!./client/assets/libs/**/*.js', '!./tests/**/*.js', '!./client/**/test.spec.js'])
    .pipe(concat('./all.js'))
    .pipe(uglify({mangle: false}))
    .pipe(rename('./all.min.js'))
    .pipe(gulp.dest('./client/dist/'));
});

//Compile Sass into CSS
gulp.task('scss', function() {
  return gulp.src('./client/assets/styles/*.scss')
    .pipe(sass())
    .pipe(rename('./main.css'))
    .pipe(gulp.dest('./client/dist/styles/'));
});

//Compile and minify Styles
gulp.task('minStyles', function() {
  return gulp.src(stylesheets)
    .pipe(concatCss('./all.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./client/dist/styles/'));
});

//Run client-side tests
gulp.task('clientTest', function(done) {
  return gulp.src(['tests/client_side/*.js'], {read: false})
    .pipe(mocha({reporter: 'spec'}))
    .on('error', util.log)
    .once('end', function() {
      process.exit();
    });
});

gulp.task('clientTest:dev', function(done) {
  new Server({
    configFile: __dirname + '/karma.config.js',
    singleRun: false,
    }, done).start();
});

Run server-side tests
gulp.task('serverTest', function() {
  return gulp.src(['tests/test.spec.js'], {read: false})
    .pipe(mocha({reporter: 'spec'}))
    .on('error', util.log)
    .once('end', function() {
      process.exit();
    });
});

//Watch for changes in client folder
gulp.task('watch', function() {
  gulp.watch(['./client/**/*.js', '!./client/dist/**/*.js'], ['scripts']);
  gulp.watch('./client/**/*.scss', ['styles']);
});

gulp.task('styles', ['scss', 'minStyles']);
gulp.task('build', ['styles', 'scripts', 'libs']);
gulp.task('tests', ['clientTest','serverTest']);
gulp.task('start', ['build', 'serve', 'watch']);
gulp.task('default', ['build', 'serve', 'watch']);
