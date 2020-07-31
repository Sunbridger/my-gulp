const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const tsProject = require('gulp-typescript').createProject('./tsconfig.json');

function babelHandle() {
  return src('src/**/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(dest('output'));
}

function tsHandle() {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(dest('output'));
  }

exports.default = series(tsHandle);
