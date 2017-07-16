{
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  let monitor=new Proxy(obj,{
    // 拦截对象属性的读取
    get(target,key){
      return target[key].replace('2017','2018')
    },
    // 拦截对象设置属性
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target,key){
      if(key==='name'){
        return target[key]
      }else{
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time')
    }
  });

  console.log('get',monitor.time);   //2018-03-11

  monitor.time='2018';
  monitor.name='mukewang';
  console.log('set',monitor.time,monitor);   // {time: "2017-03-11", name: "mukewang", _r: 123}

  console.log('has','name' in monitor,'time' in monitor);   // true false

  // delete monitor.time;
  // console.log('delete',monitor,"1231231232"); //  {time: "2017-03-11", name: "mukewang", _r: 123}

  // delete monitor._r;
  // console.log('delete',monitor);  // {time: "2017-03-11", name: "mukewang"}
  console.log('ownKeys',Object.keys(monitor));  // ["name"]
}

{
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };
  // 要避免直接操作obj 而使用 Reflect来操作obj
  console.log('Reflect get',Reflect.get(obj,'time'));
  Reflect.set(obj,'name','mukewang');
  console.log(obj);
  console.log('has',Reflect.has(obj,'name'));
}
// 案例
{
  // target 就是person 的实例对象
  function validator(target,validator) {
      return new Proxy(target,{
         _validator:validator,
          // 对set 设置属性进行代理
          set(target,key,value,proxy){
           if(target.hasOwnProperty(key)){
             let va = this._validator[key];
             if(!!va(value)){
                return Reflect.set(target,key,value,proxy)
             }else{
                 throw Error(`不能设置${key}到${value}`);
             }
           }else{
             throw Error(`${key}不存在`);
           }
          }
      })
  }
    const personValidators = {
        name(val){
            return typeof val ==='string'
        },
        age(val){
            return typeof  val === "number" && val>18
        }

    };
    class Person{
      constructor(name,age){
        this.name = name;
        this.age = age;
        return validator(this,personValidators)
      }
    }
    const person = new Person('lilei',30);

    // person.name = 48;  // 不能设置name到48
    person.name = 'hanmeimei';
    console.log(person);  // {name: "hanmeimei", age: 30}
    // 总结这样写的好处  就是 吧validator和person完全隔离
    // 后期修改validator 不会影响person
}















