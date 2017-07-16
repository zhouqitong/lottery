import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';  //命令行

gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  // 监听第一个参数的文件，执行第二个参数的脚本
  // 可以将es6转化成es5然后写入server目录
    gulp.watch('app/**/*.js',['scripts']); 
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
