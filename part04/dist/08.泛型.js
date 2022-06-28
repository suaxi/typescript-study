"use strict";
function f(a) {
    return a;
}
/**
 * 在定义函数或类遇到类型不明确时，可以使用泛型
 */
function fn(a) {
    return a;
}
//不指定泛型，TS编译器可以自动判断类型
let num = fn(10);
//手动指定泛型
let str = fn('abc');
//可以同时指定多个泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'abc');
//表示类型的上界，参数的类型可能是myInterface或其的子类
function fn3(a) {
    return a;
}
class myClass {
    constructor(name) {
        this.name = name;
    }
}
const myClazz = new myClass('孙笑川');
//# sourceMappingURL=08.%E6%B3%9B%E5%9E%8B.js.map