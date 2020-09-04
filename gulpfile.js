const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('test', (done) => {
  console.log('Gulp is Running');
  done();
});

gulp.task('sass', (done) => {
  return gulp
    .src('./assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true,
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/css/compiled'));
  done();
});

gulp.task('watch', () => {
  gulp.watch(['./assets/scss/**/*.scss', '**/*.html'], gulp.series(['sass']));
});
