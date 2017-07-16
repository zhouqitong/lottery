{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`); // 超过oxFFFF 没法正常显示
  //es6
  console.log('s',`\u{20BB7}`); // 𠮷
}
{
  let s='𠮷';
  console.log('length',s.length);  // 2
  console.log('0',s.charAt(0));    //  不识别的字符
  console.log('1',s.charAt(1));    //  不识别的字符
  console.log('at0',s.charCodeAt(0));  // 55362
  console.log('at1',s.charCodeAt(1)); // 57271
  // es6
  let s1='𠮷a';
  console.log('length',s1.length);         // 3
  console.log('code0',s1.codePointAt(0));  //134071
  console.log('code0',s1.codePointAt(0).toString(16));  //转16进制  20bb7
  console.log('code1',s1.codePointAt(1));   //57271
  console.log('code2',s1.codePointAt(2));  // 97
}

{
  console.log(String.fromCharCode("0x20bb7")); // es5  ஷ
  console.log(String.fromCodePoint("0x20bb7"));// es6  𠮷
}

{
  // � � a b c
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  // 𠮷 a b c
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  console.log(str.repeat(2)); //abcabc
}

{
  // 模板字符串  i am list,hello world
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);
}

{
  // 长度为2 用0 填充
  console.log('1'.padStart(2,'0'));  //01
  console.log('1'.padEnd(2,'0'));     //10
}

{
  // 标签模板  作用: 1.过滤html字符串 防止xss攻击  2.处理多语言转换 一套模板返回不同结果
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);                  // s ["i am ", ",", "", raw: Array(3)] "list" "hello world"
    return s+v1+v2                         // i am ,,,listhello world
  }
}

{
  console.log(String.raw`Hi\n${1+2}`);   // Hi\n3
  console.log(`Hi\n${1+2}`);   //  Hi
                                // 3
}
