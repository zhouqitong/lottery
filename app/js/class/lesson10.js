{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size', list.size);
}

{
    let arr = [1, 2, 3, 4, 5];
    let list = new Set(arr);

    console.log('size', list.size);
}

{
    // 用来去重
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log('list', list);

    let arr = [1, 2, 3, 1, '2'];
    let list2 = new Set(arr);

    console.log('unique', list2);  // unique {1, 2, 3, "2"}
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    console.log('has', list.has('add'));
    console.log('delete', list.delete('add'), list); // true  {"delete", "clear", "has"}
    list.clear();
    console.log('list', list);  // {}
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    for (let key of list.keys()) {
        console.log('keys', key);
    }
    for (let value of list.values()) {
        console.log('value', value);
    }
    for (let [key, value] of list.entries()) {
        console.log('entries', key, value);  // key 和 value 相同
    }

    list.forEach(function (item) {
        console.log(item);
    })
}


{
    // 添加对象只是地址的引用 也不去检测地址是不是被垃圾回收掉了
    // 只能添加对象
    let weakList = new WeakSet();

    let arg = {};

    weakList.add(arg);

    // weakList.add(2);

    console.log('weakList', weakList);   //{Object {}}
}

{
    let map = new Map();
    let arr = ['123'];

    map.set(arr, 456);

    console.log('map', map, map.get(arr));   //  {["123"] => 456} 456
}

{
    let map = new Map([['a', 123], ['b', 456]]);
    console.log('map args', map);    // {"a" => 123, "b" => 456}
    console.log('size', map.size);  //2
    console.log('delete', map.delete('a'), map);  // {"b" => 456}
    console.log('clear', map.clear(), map);   //{}
}

{
    let weakmap = new WeakMap();

    let o = {};
    weakmap.set(o, 123);
    console.log(weakmap.get(o));  // 123
}
{
    let map = new Map();
    let array = [];
    // 增
    map.set('t', 1);
    array.push({t: 1});
    //{"t" => 1}   object
    console.info('map-array', map, array);
    // 查
    let map_exit = map.has('t');
    let array_exist = array.find(item => item.t);
    // true Object {t: 1}
    console.info('map-array', map_exit, array_exist);
    // 改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    //{"t" => 2}  Object
    console.info('map-array-modify', map, array);
    // 删
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    // {} []
    console.info('map-array-empty', map, array);
}
{

    // map set object 对比
    let item = {t: 1};
    let map = new Map();
    let set = new Set();
    let obj = {};
    // 增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;
    //  {"t" => 1} {Object {t: 1}}  {t: 1}
    console.log('map-set-obj',map,set,obj);

    // 查  true
    console.log({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    });
    // 改
    map.set('t',2);
    item.t= 2;
    obj['t'] = 2;
    //{"t" => 2}  {Object {t: 2}} {t: 2}
    console.log('map-set-obj',map,set,obj);

    // 删除
    map.delete('t');
    set.delete(item);
    // 如果set没有引用直接存的对象 需要遍历删除:
    /*set.add({t:1})  ;
    set.forEach(item=>item.t?item.delete(item):'')*/
    delete  obj['t'];
    console.log('map-set-obj-del',map,set,obj);

//    总结 能使用map 不用数组和obj 尤其是复杂的数据结构  如果要求唯一性用set
}











