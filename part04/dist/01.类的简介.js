"use strict";
//定义一个类
/**
 * 对象中主要包含的两个部分
 * 属性
 * 方法
 */
class Person {
    constructor() {
        //实例属性
        //readonly只读
        //readonly name: string = '孙笑川';
        //类属性（静态变量）
        //static age: number = 33;
        //常规定义方式
        this.name = '孙笑川';
        this.age = 33;
    }
    //方法
    sayHello() {
        console.log('你好，孙笑川');
    }
}
const p = new Person();
console.log(p);
//console.log(Person.age);
p.sayHello();
//# sourceMappingURL=01.%E7%B1%BB%E7%9A%84%E7%AE%80%E4%BB%8B.js.map