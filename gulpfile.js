const gulp = require('gulp');

// Plugins
const changed = require('gulp-changed'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat');
    uglify = require('gulp-uglify'),
    imagemin = require ('gulp-imagemin'),
    minifyhtml = require ('gulp-minify-html'),
    autoprefixer = require ('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifyCSS = require ('gulp-minify-css');

gulp.task('scripts', function() {
     return gulp.src('js/*.js')
            .pipe(concat('all.js'))
            .pipe(gulp.dest('dist'))
            .pipe(uglify())
            .pipe(rename("all-min.js"))
            .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(gulp.dest("C:/UwAmp/www/ag/templates/wz-standard/scss")) 
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest("C:/UwAmp/www/ag/templates/wz-standard/css"))
        .pipe(minifyCSS())
        .pipe(rename("style-min.css"))
        .pipe(gulp.dest('css')) 
        .pipe(gulp.dest("C:/UwAmp/www/ag/templates/wz-standard/css"))   
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);