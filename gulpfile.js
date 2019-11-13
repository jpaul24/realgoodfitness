var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


function style() {
  return gulp.src('public/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
  gulp.watch('public/scss/**/*.scss', style);
  gulp.watch('public/*.html').on('change', browserSync.reload);
  gulp.watch('public/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
