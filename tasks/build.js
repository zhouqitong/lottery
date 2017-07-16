import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
//clean要最先执行，serve 要放在最后执行
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
