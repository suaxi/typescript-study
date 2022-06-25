import { hello } from './test'

function sum(a: number, b: number): number {
    return a + b;
}

let fn = (a: number, b: number) => a + b;

fn(1, 2);

console.log(sum(1, 2));
console.log(hello);
console.log(Promise)