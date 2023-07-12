const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');


function buildStyles() {
    return gulp.src('style/main.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
};

function watchMinifyJS() {
    return gulp.watch('src/**/*.js', minifyJS)
}

function watchStyles() {
    return gulp.watch('style/*.scss', buildStyles)
}

function minifyJS() {
    return gulp.src('./src/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));
};

function modelIndexHTML() {
    return gulp.src('./index.html')
    .pipe(gulp.dest('./dist'));
}

function watchHTML() {
    return gulp.watch('./index.html', modelIndexHTML)
}

exports.buildStyles = buildStyles;
exports.watchStyles = watchStyles;
exports.minifyJS = minifyJS;
exports.watchMinifyJS = watchMinifyJS
exports.watchHTML = watchHTML
exports.build = gulp.series(modelIndexHTML, gulp.parallel(buildStyles, minifyJS))