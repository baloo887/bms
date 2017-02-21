'use strict';

var gulp = require('gulp');
var sequence = require('run-sequence');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var filter = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var babelify = require('babelify');


gulp.task('styles', function() {
  var sassFilter = filter('**/*.scss', { restore: true })
  return gulp.src([
      'bower_components/ng-notify/dist/ng-notify.min.css',
      'bower_components/angular-tooltips/dist/angular-tooltips.min.css',
      'bower_components/angularjs-datepicker/dist/angular-datepicker.min.css',
      './index.scss'
    ])
    .pipe(sassFilter)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sassFilter.restore)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('index.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('./app/public/index.html')
    .pipe(gulp.dest('dist/'));
});


gulp.task('images', function() {
  return gulp.src('app/assets/images/**')
    .pipe(gulp.dest('dist/assets/images/'))
    .pipe(livereload());
});

gulp.task('icons', function() {
  return gulp.src('app/assets/icons/**')
    .pipe(gulp.dest('dist/assets/icons/'))
    .pipe(livereload());
});

gulp.task('clean', function() {
  return del(['dist/*']);
});


gulp.task('fonts', function() {
  return gulp.src('app/assets/fonts/*.*')
    .pipe(gulp.dest('dist/assets/fonts/'));
});

gulp.task('watchify', function() {
    var bundler = browserify({
        entries: ['./app/src/index.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('index.js'))
    // This is where you add uglifying etc.
        .pipe(gulp.dest('./build/'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('browserify', function() {

    return browserify('./app/src/index.js', { debug: true })
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .on("error", function (err) { console.log("Error : " + err); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/scripts'));
});

// I added this so that you see how to run two watch tasks
gulp.task('css', function () {
    gulp.watch('styles/**/*.css', function () {
        return gulp.src('styles/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/'));
    });
});

// Just running the two tasks
gulp.task('default', ['clean','browserify','html']);
