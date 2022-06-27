//定义一个类
/**
 * 对象中主要包含的两个部分
 * 属性
 * 方法
 */
class Person {

    //实例属性
    //readonly只读
    //readonly name: string = '孙笑川';

    //类属性（静态变量）
    //static age: number = 33;

    //常规定义方式
    name = '孙笑川';
    age = 33;

    //方法
    sayHello() {
        console.log('你好，孙笑川');
    }
}

const p = new Person();
console.log(p);

//console.log(Person.age);

p.sayHello();