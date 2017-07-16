{
  // 简洁表示法
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={
    o,
    k
  };
  console.log(es5,es6);  // Object {o: 1, k: 2} Object {o: 1, k: 2}

  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());   //undefined undefined
}

{
  // 属性表达式
  let a='b';
  let es5_obj={
    a:'c',
    b:'c'
  };

  let es6_obj={
    [a]:'c'       // 表达式
  }

  console.log(es5_obj,es6_obj);  //Object {a: "c", b: "c"} Object {b: "c"}
}

{
  // 新增API
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc'); //true true
  console.log('数组',Object.is([],[]),[]===[]);  //false false  地址不一样
    //1浅拷贝,只拷贝引用地址 而不是把所有的值都拷贝过去
    //2 只拷贝自身的属性 ,如果有继承 不会拷贝继承的属性
    // 3 不拷贝不可枚举的属性
  console.log('拷贝',Object.assign({a:'a'},{b:'b'}));  // Object {a: "a", b: "b"}

  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);     //["k", 123]   ["o", 456]
  }
}

{
  // 扩展运算符  babel 也不支持
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}
