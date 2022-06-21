//声明一个变量a，同时指定类型为number（在以后的使用过程中，a的值只能是数字）
var a;
a = 1;
var b;
b = 'hello';
//如果变量的声明和赋值同时进行，可以省略类型的声明
var c = true;
//JS中的函数不考虑参数的类型和个数
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 321));
