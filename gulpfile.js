var gulp = require('gulp');
//Include our plugins
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var del = require('del');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var Server = require('karma').Server;
var uglify = require('gulp-uglify');

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

//Concatenante and minify JS
gulp.task('scripts', function() {
  return gulp.src(['./client/**/*.js', '!./client/dist/**/*.js', '!./client/assets/libs/**/*.js'])
    .pipe(concat('./all.js'))
    .pipe(gulp.dest('./client/dist/'));
    // .pipe(rename('./all.min.js'))
    // .pipe(uglify())
    // .pipe(gulp.dest('./client/dist/'));
});

//Start node server with nodemon
gulp.task('serve', function() {
  nodemon({script: 'index.js', ignore: 'node_modules/**/*.js'});
});

//Compile Sass into CSS
gulp.task('styles', function() {
  return gulp.src('./client/assets/styles/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./client/dist/styles/'));
});

//Run tests
gulp.task('tests', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    }, done).start();
});

//Watch for changes in client folder
gulp.task('watch', function() {
  gulp.watch(['./client/**/*.js', '!./client/dist/**/*.js'], ['scripts']);
  gulp.watch('./client/**/*.scss', ['styles']);
});

gulp.task('build', ['styles', 'scripts']);
gulp.task('test', ['tests']);
gulp.task('default', ['styles', 'scripts', 'serve', 'watch']);
