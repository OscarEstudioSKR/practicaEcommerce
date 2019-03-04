const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')


gulp.task('convert', ()=>
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./src/css'))
);
