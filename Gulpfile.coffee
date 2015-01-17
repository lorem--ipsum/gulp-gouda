gulp  = require 'gulp'
gutil = require 'gutil'
gouda = require './gulp-gouda'


gulp.task 'default', ->
  return gulp.src('./input/*.gouda')
    .pipe(gouda({extension: 'css'}).on('error', gutil.log))
    .pipe(gulp.dest('./output/'))

gulp.task 'watch', ->
  gulp.watch ['input/*.gouda'], ['default']


