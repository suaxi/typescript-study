function f(a: number): number {
    return a;
}

/**
 * 在定义函数或类遇到类型不明确时，可以使用泛型
 */
function fn<T>(a: T): T{
    return a;
}

//不指定泛型，TS编译器可以自动判断类型
let num = fn(10);
//手动指定泛型
let str = fn<String>('abc');

//可以同时指定多个泛型
function fn2<T, K>(a: T, b: K): T{
    console.log(b);
    return a;
}

fn2<number, string>(123, 'abc');

interface myInterface {
    length: number;
}

//表示类型的上界，参数的类型可能是myInterface或其的子类
function fn3<T extends myInterface>(a: T): T {
    return a;
}

class myClass<T> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }
}

const myClazz = new myClass<string>('孙笑川');