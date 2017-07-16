{
  // genertaor基本定义
    // 需要添加
    //regeneratorRuntime is not defined
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k=tell();

  console.log(k.next());  // {value: "a", done: false}
  console.log(k.next());  // {value: "b", done: false}
  console.log(k.next());  // {value: "c", done: true}
  console.log(k.next()); //  {value: undefined, done: true}
}
// 直接使用generator 赋值给iterator  直接使用它进行迭代
{
  let obj={};

  obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let value of obj){
    console.log('value',value);
  }
}

{
  let state=function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}
//这个需要给babel 安装插件 异步语法糖
// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }
// 案例  抽奖

{
  let draw = function (count) {
      // 之前的做法使用全局变量 保存次数 ,但是这样不安全
      console.log(`剩余${count}次`);
  }
  let residue = function* (count) {
      while(count>0){
        count--;
        yield draw(count);
      }
  }
  let star = residue(5);
  let btn = document.createElement('button');
  btn.id = 'start';
  btn.textContent = '抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click',function () {
      star.next();
  },false)

}
  // 应用在长轮询中
{
  let ajax = function* () {
      yield new Promise(function (resolve,reject) {
          setTimeout(function () {
              resolve({code:1})
          },200)
      })
  };
  let pull = function () {
      let generator= ajax();
      // 第一次运行
      let step = generator.next();
      // step.value 是Promise实例
      step.value.then(function (d) {
          if(d.code !=0){
            //重新pull
            setTimeout(function () {
                console.log('wait');
                pull()
            },1000)
          }else{
            console.log(d);
          }
      })
  }
  pull();
}




