"use strict";

function test(){
  // for(let i=1;i<3;i++){
  //   console.log(i);
  // }
  // console.log(i);

    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);
}

// function last(){
//   const PI=3.1415926;
//   const k={
//     a:1
//   }
//   k.b=3;
//   console.log(PI,k);
// }


test();
// last();
