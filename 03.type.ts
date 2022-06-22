//可以使用 | 来连接多个类型
let a: boolean | string;
a = true;
a = 'hello';

//设置为any类型相当于关闭了TS的类型监测
let b: any;
b = 1;
b = true;
b = 'string';

//声明变量时如果不指定类型，则TS解析器会自动判定变量的类型为any（隐式any）
//any可以赋值给任意变量
let c;
c = 1;
c = 'hello';

//表示未知类型（实际上是一个类型安全的any）
//不能直接赋值给其他变量
let d: unknown;
d = 1;
d = 'hello';

let e: string;

if (typeof d === 'string') {
    e = d;
}

/**
 * 类型断言，告诉解析器变量的实际类型
 *
 * 语法：
 * 变量 as 类型
 * <类型>变量
 */
e = d as string;
e = <string>d;

function fn(num) {
    if (num > 0) {
        return true;
    }
    return 123;
}

//没有返回值
function f(): void {
    return null;
}

//不返回结果
function fun(): never {
    throw new Error("出现异常");
}

//object表示一个js对象
let aa: object;
aa = {};
aa = function () {}

/**
 * {} 用来指定对象中可以包含哪些属性
 *
 * 语法：{属性名1：值1，属性名2：值2}
 * 属性名之后加上问号表示可选的
 */
let bb: {name: string, age?: number}
bb = {name: '孙笑川'}

//[xxx: string]: any 表示任意类型、个数的属性，xxx可自定义
let cc: {name: string, [propName: string]: any}
cc = {name: '刘波'}

/**
 * 函数结构的类型声明
 * 语法：(形参：类型，形参：类型 ...) => 返回值
 */
let dd: (a: number,b: number) => number;
dd = function (num1, num2) {
    return num1 + num2;
}

/**
 * 数组的两种声明方式：
 * 类型[]
 * Array<类型>
 */
//string[] 表示字符串数组
let ee: string[];
ee = ['a','b']

let ff: Array<string>;
ff = ['a','b']

/**
 * tuple元组：定长数组
 * 语法：[类型，类型 ...]
 */
let gg: [string, string];
gg = ['a','b']
//gg = ['a','b', 'c']

/**
 * enum枚举
 */
enum Gender {
    MALE = 0,
    FEMALE
}

let hh: {name: string, gender: 0|1};
hh = {
    name: '孙笑川',
    gender: Gender.MALE
}
//console.log(hh.gender === Gender.MALE)

/**
 * & 表示需要同时满足
 */
let ii: {name: string} & {age: number}
ii = {name:'孙笑川', age: 33}

/**
 * 类型的别名（简化类型的使用）
 */
type numType = 1 | 2 | 3;
let jj: numType;
jj = 1;

type strType = 'a' | 'b' | 'c';
let kk: strType;
kk = 'a';