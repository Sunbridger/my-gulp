const { src, dest } = require('gulp');
const babel = require('gulp-babel');


function streamTask() {
  return src('src/**/*.js')
    .pipe(babel())
    .pipe(dest('output'));
}

exports.default = streamTask;
