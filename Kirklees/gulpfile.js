var postcss = require('gulp-postcss');
var gulp = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var cssbeautify = require('gulp-cssbeautify');
var postCSSOptions = require('./postcss.config');

gulp.task('css', () => {
  return gulp
    .src(['./build/main.css'])
    .pipe(changed('./'))
    .pipe(postcss(postCSSOptions))
    .pipe(gulp.dest('./build'));
});

gulp.task('compile', () => {
  return gulp
    .src('*.scss')
    .pipe(changed('./build'))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'));
});
gulp.task('lint-scss', () => {
  return gulp
    .src(['./**/*.scss', './partials/*.scss'])
    .pipe(changed('./'))
    .pipe(postcss(postCSSOptions))
    .pipe(gulp.dest('./'));
});
gulp.task('prettify', () => {
  return gulp
    .src('./build/*.css')
    .pipe(
      cssbeautify({
        indent: '  '
      })
    )
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
  gulp.watch(
    ['./**/*.scss', './partials/*.scss'],
    gulp.series(['compile', 'css', 'prettify'])
  );
});
