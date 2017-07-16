class Timer{
    countdown(end,update,handler){
        const now = new Date().getTime();
        const self = this;
        // 当前时间大于截止时间 说明倒计时已经结束了
        if(now - end >0){
            handler.call(self);
        }else{
            let last_time = end - now;
            const px_d = 1000*60*60*24;
            const px_h = 1000*60*60;
            const px_m = 1000* 60;
            const px_s = 1000;
            // 剩余时间还剩多少天,小时,分,秒
            let d = Math.floor(last_time/ px_d);
            let h = Math.floor((last_time - px_d*d)/px_h);
            let m = Math.floor((last_time - px_d*d -px_h*h)/px_m);
            let s = Math.floor((last_time - px_d*d -px_h*h -px_m*m)/px_s);
            let r = [];
            if(d>0){
                r.push(`<em>${d}</em>天`);
            }
            if(r.length || (h>0)){
                r.push(`<em>${h}</em>时`);
            }
            if(r.length || (m>0)){
                r.push(`<em>${m}</em>分`);
            }
            if(r.length || (s>0)){
                r.push(`<em>${s}</em>秒`);
            }
            //保存到对象的last_time中
            self.last_time=r.join('');
            //更新一次界面
            update.call(self,r.join(''));
            //轮训
            setTimeout(function () {
                self.countdown(end,update,handler);
            },1000)
        }
    }
}
export default Timer