{
  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello');         // hello world
  test('hello','kill');  //hello kill
}

{
  let x='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');  //kill kill
  test2();  //undefined undefined
}

{
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');     // 1 2 3 4 a
}
{
  // 和上面的不同的是 把数组转化成零散的值
  console.log(...[1,2,4]);   // 1 2 4
  console.log('a',...[1,2,4]); // a 1 2 4
}

{
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));  // 6
  console.log(arrow2()); // 5

}

{
  // 尾调用 : 提升性能   应用 递归 或者函数嵌套函数
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x)
  }
  fx(123)
}
