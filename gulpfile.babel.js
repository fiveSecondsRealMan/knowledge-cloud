/**
  gulp 配置文件
**/

import path from 'path';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

const plugins = loadPlugins();

const root = path.join(__dirname);
const dev = path.join(root, 'src');
const build = path.join(root, 'dist');

gulp.task('compile-es6', () => {
  return gulp
    .src(dev + '/**/*.js')
    .pipe(plugins.babel())
    .pipe(gulp.dest(build))
});

gulp.task('watch', ['compile-es6'], () => {
  gulp.watch(dev + '/**/*.js', ['compile-es6']);
})
