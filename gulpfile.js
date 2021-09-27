var gulp = require('gulp');
var replace = require('gulp-replace');
var markdown = require('gulp-markdown-it');
var wrap = require("gulp-wrap");
const rename = require('gulp-rename');

// Tasks that convert markdown files to HTML files.

gulp.task('readme', function () {
    return gulp
        .src('./README.md')
        .pipe(replace(/.md/g, '.html'))
        .pipe(markdown())
        .pipe(wrap({ src: './src/assets/template-readme.html' }))
        .pipe(rename({ basename: 'overview' }))
        .pipe(
            gulp.dest("./public/")
        );
});
gulp.task('help-dev', function () {
    return gulp
        .src('./for-developers.md')
        .pipe(markdown())
        .pipe(wrap({ src: './src/assets/template-dev.html' }))
        .pipe(
            gulp.dest("./public/")
        );
});
gulp.task('help-user', function () {
    return gulp
        .src('./for-end-users.md')
        .pipe(markdown())
        .pipe(wrap({ src: './src/assets/template-user.html' }))
        .pipe(
            gulp.dest("./public/")
        );
});
gulp.task('terms-conds', function () {
    return gulp
        .src('./terms-conds.md')
        .pipe(markdown())
        .pipe(wrap({ src: './src/assets/template-terms-conds.html' }))
        .pipe(
            gulp.dest("./public/")
        );
});
// gulp.task('default', function () {
//     return gulp.watch('./for-end-users.md', gulp.series(['help-user']));
// });