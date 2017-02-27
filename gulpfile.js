const PATH = require('path');

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemap = require('gulp-sourcemaps');

const ROOT = './';

const JS_FILES = PATH.resolve(__dirname, ROOT, 'app/**/*.js');
const SCSS_SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'app/scss/');
const SCSS_SRC_FILES = PATH.resolve(__dirname, ROOT, SCSS_SRC_FOLDER, '**/*.scss');
const SCSS_SRC_FILE = PATH.resolve(__dirname, ROOT, SCSS_SRC_FOLDER, 'style.scss');
const SCSS_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'app/public/css/');

gulp.task('lint:app', function () {
  return gulp.src(JS_FILES)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:watch:app', ['lint:app'], function() {
  gulp.watch(JS_FILES, ['lint:app']);
});

gulp.task('build:scss', function () {
  return gulp.src(SCSS_SRC_FILE)
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemap.write())
    .pipe(gulp.dest(SCSS_BUILD_FOLDER))
});

gulp.task('build:watch:scss', ['build:scss'], function() {
  gulp.watch(SCSS_SRC_FILES, ['build:scss']);
});

gulp.task('default', ['build:watch:scss','lint:watch:app']);
