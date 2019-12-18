const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync').create();
const SourceMaps  = require('gulp-sourcemaps');


gulp.task('sass', function (){
return gulp.src('app/scss/style.scss')
    .pipe(plumber())
    .pipe(SourceMaps.init())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(SourceMaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function (){
     return gulp.src('*.html')
     .pipe(gulp.dest('app'))
     .pipe(browserSync.reload({stream:true}))
 })

 gulp.task('serve', function (){
     browserSync.init({
         server: "app"
     });

     gulp.watch("app/scss/*.scss", gulp.parallel('sass'))
     gulp.watch("*.html",  gulp.parallel('html'))
 })