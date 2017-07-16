import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
  if(!args.watch) return cb();
  // 在当前目录下执行server/bin/www 脚本
  var server = liveserver.new(['--harmony','server/bin/www']);
  server.start();
  // 第一个参数：数组，监听哪些路径   
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
  	// 通知服务器 文件已经发生改变
    server.notify.apply(server,[file]);
  })
  // 监听路由变化 
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
   	// 通知服务器重启
   server.start.bind(server)()
  });
})
