"use strict";

const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const NODE_ENV = process.env.NODE_ENV;

var supported = [
    'last 2 versions',
    'safari >= 8',
    'ie >= 10',
    'ff >= 20',
    'ios 6',
    'android 4'
];

gulp.task('sass', () => 
    NODE_ENV == 'production'?
    gulp.src('./*.scss')
      .pipe(sass())
      .pipe(cssnano({
        autoprefixer: {browsers: supported, add: true}
      }))
      .pipe(gulp.dest('./public/css')) 
    :
    gulp
      .src('./*.scss').pipe(sass())
      .pipe(gulp.dest('./public/css'))
);

gulp.task('sass:watch', () => 
  gulp.watch('./*.scss', ['sass'])
);

