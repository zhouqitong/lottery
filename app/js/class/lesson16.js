{
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false;
        return descriptor
    };

    class Test {
        @readonly
        time() {
            return '2017-03-11'
        }
    }

    let test = new Test();
    // Cannot assign to read only property 'time' of object '#<Test>'
    // test.time = function () {
    //     console.log('reset time');
    // };

    console.log(test.time());
}


{
    let typename = function (target, name, descriptor) {
        target.myname = 'hello';
    }

    @typename
    class Test {

    }

    console.log('类修饰符', Test.myname);
    // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}
// 案例  埋点日志
// 这样写好处 将 埋点和 类分离 以后修改埋点代码就可以
{
    let log = (type) => {
        return function (target, name, descriptor) {
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target, arg);
                console.log(`log${type}`);
            }
        }
    };
    class AD {
        @log('show')
        show() {
            console.info('ad is show')
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}
