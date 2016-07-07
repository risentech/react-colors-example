var gulp = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');


function swallowError (error) {

    // If you want details of the error in the console
    console.log(error.toString());

    this.emit('end')
}

gulp.task('default', function() {
   return browserify({
       entries: './scripts/app.jsx'
   })
       .transform('babelify', {presets: ['es2015', 'react']})
       .bundle()
       .on('error', swallowError)
       .pipe(source('app.js'))
       .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
    gulp.watch('./scripts/**/*.{js,jsx}', ['default']);
});
