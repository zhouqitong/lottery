{
  console.log('B',0B111110111);  // 二进制
  console.log(0o767);// 八进制
}

{
  console.log('15',Number.isFinite(15));   // true
  console.log('NaN',Number.isFinite(NaN));  // false
  console.log('1/0',Number.isFinite('true'/0)); // false
  console.log('NaN',Number.isNaN(NaN));    // true
  console.log('0',Number.isNaN(0));        // false
}

{
  console.log('25',Number.isInteger(25));    //true
  console.log('25.0',Number.isInteger(25.0));  // true
  console.log('25.1',Number.isInteger(25.1));  //false
  console.log('25',Number.isInteger('25'));   // false
}

{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);  // -2^53
  console.log('10',Number.isSafeInteger(10)); // true
  console.log('a',Number.isSafeInteger('a')); // false
}

{
  // 返回整数部分
  console.log(4.1,Math.trunc(4.1));  // 4
  console.log(4.9,Math.trunc(4.9));  // 4
}

{
  // 判断 正数, 负数 0
  console.log('-5',Math.sign(-5));  // -1
  console.log('0',Math.sign(0));  // 0
  console.log('5',Math.sign(5));  // 1
  console.log('50',Math.sign('50'));   // 1
  console.log('foo',Math.sign('foo')); // NaN
}
{
   // 立方根
  console.log('-1',Math.cbrt(-1)); // -1
  console.log('8',Math.cbrt(8));  // 2
}
