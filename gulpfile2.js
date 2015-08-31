var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('css', function(){
  return gulp.src('*.styl')
    .pipe( $.sourcemaps.init())
    .pipe( $.stylus( { compress: true}))
    .pipe( $.sourcemaps.write('.'))
    .pipe( gulp.dest('src/css') );
});

gulp.task('default', function(){
  

});
