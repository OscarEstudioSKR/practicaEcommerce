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

gulp.task('default', ()=>
    gulp.watch('./src/scss/*.scss', gulp.series('convert')));


    var gulp = require("gulp");
    var ts = require("gulp-typescript");
    var tsProject = ts.createProject("tsconfig.json");
    
    gulp.task("default", function () {
      return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
    });