{
  // 独一无二变量声明
  let a1=Symbol();
  let a2=Symbol();
  console.log(a1===a2);   // false
  let a3=Symbol.for('a3');
  let a4=Symbol.for('a3');
  console.log(a3===a4);// true
}

{
  let a1=Symbol.for('abc');
  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj); //Object {abc: 345, c: 456, Symbol(abc): "123"}

  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value);   // let of abc 345   let of c 456  娶不到Symbol
  }

  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);           // 123
  })
  // 都能拿到
  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]);    // abc 345  c 456 Symbol(abc) 123
  })
}
