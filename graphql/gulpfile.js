const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['watch']);
gulp.task('build', ['scripts']);

gulp.task('scripts', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    
    return tsResult.js
        .pipe(gulp.dest('dist'));                            
});

gulp.task('static', ['clean'], () => {
    return gulp
        .src([ 'src/**/*.json' ])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('watch', ['build'], () => {
    return gulp.watch([
        'src/**/*.ts',
        'src/**/*.json',
    ],
    ['build']);
});