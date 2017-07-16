import $ from 'jquery'
class Interface {
    //如果没有属性可以不写constructor
    // 获取遗漏数据 当前期号
    getOmit(issue){
        //因为是闭包,保留this的指向
        // this 的指向是在定义的时候,而不是在运行的时候
        let self = this;
        // 传统是用callback
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    //保存数据
                    self.setOmit(res,this.data);
                    resolve.call(self,res)
                },
                error:function (err) {
                    reject.call(err);
                }
                
            })
        })
    }
    //获取开奖号码
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
           $.ajax({
               url:'/get/opencode',
               data:{
                   issue:issue
               },
               dataType:'json',
               success:function (res) {
                   //保存开奖号码
                   // 例如base.js 也要用到的就可以使用实例去获取
                   console.log("pre");
                   console.log("aaaaa"+data);
                   console.log("bbbb"+data);
                   self.setOpenCode(res,data);
                   resolve.call(self,res)
               },
               error:function (err) {
                   reject.call(err)
               }
           })
        })
    }

    // 获取当前状态 issue 当前期号
    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    // 这个不是单纯的保存
                    resolve.call(self,res)
                },
                error:function (err) {
                    reject.call(err)
                }
            })
        })
    }

}
export default Interface