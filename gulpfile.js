var gulp = require('gulp');
var replace = require('gulp-replace');
var markdown = require('gulp-markdown-it');
var wrap = require("gulp-wrap");
const rename = require('gulp-rename');

// Tasks that convert markdown files to JSX files.

gulp.task('md-jsx', function () {
    return gulp
        .src('./markdown/*.md')
        .pipe(markdown())
        .pipe(wrap({ src: './src/assets/TemplateReact.txt' }))
        .pipe(rename({ extname: '.jsx' }))
        .pipe(
            gulp.dest("./src/components/preprocessed")
        );
});
