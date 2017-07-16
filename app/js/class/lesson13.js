{
  // 基本定义
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback.call()
    }, 1000);
  };
  ajax(function(){
    console.log('timeout1');
  })
}
// 如果方法过多 使用回调就会变得很麻烦
{
  let ajax=function(){
    console.log('执行2');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax().then(function(){
    console.log('promise','timeout2');
  })
}
// 执行多个方法
{
  let ajax=function(){
    console.log('执行3');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax()
    .then(function(){
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 2000);
    });
  })
    .then(function(){
    console.log('timeout3');
  })
}
// 补货中间出错的
{
  let ajax=function(num){
    console.log('执行4');
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve()
      }else{
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  });

  ajax(3).then(function(){
    console.log('log',3);
  }).catch(function(err){
    console.log('catch',err);
  });
}
// 案例  所有图片加载完成后再加载到页面
{
   function loadImg(src){
     return new Promise((resolve,reject)=>{
       let img = document.createElement("img");
       img.src = src;
       img.onload = function () {
           resolve(img);
       };
       img.onerror = function (err) {
           reject(err);
       }
     })
   }

   function showImgs(imgs){
      imgs.forEach(function (img) {
          document.body.appendChild(img)
      })
   }
   // 都加载完成作为一个Promise实例执行
   Promise.all([
       loadImg("http://zhouqitong.coding.me/images/datavisual/user/%E7%94%A8%E6%88%B7%E5%88%86%E6%9E%90.png"),
       loadImg("http://zhouqitong.coding.me/images/datavisual/user/%E7%94%A8%E6%88%B7%E5%88%86%E6%9E%90.png"),
       loadImg("http://zhouqitong.coding.me/images/datavisual/user/%E7%94%A8%E6%88%B7%E5%88%86%E6%9E%90.png")
   ]).then(showImgs)
    // 有一个就可以
    Promise.race([
        loadImg("http://zhouqitong.coding.me/images/datavisual/user/%E7%94%A8%E6%88%B7%E5%88%86%E6%9E%90.png"),
        loadImg("http://zhouqitong.coding.me/images/datavisual/user/%E7%94%A8%E6%88%B7%E5%88%86%E6%9E%90.png"),
        loadImg("http://zhouqitong.coding.me/images/datavisual/user/%E7%94%A8%E6%88%B7%E5%88%86%E6%9E%90.png")
    ]).then(showImgs)
}
