## TypeScript

### 一、基础环境搭建

```bash
# 安装
npm i -g typescript
```



### 二、基本类型

#### 1. 类型声明

语法：

```typescript
let 变量: 类型;

let 变量: 类型 = 值;

function fn(参数: 类型, 参数: 类型): 类型{
    ......
}
```



#### 2. 自动类型判断

+ TS拥有自动类型判断机制
+ 当对变量的声明和赋值同时进行时，TS编译器会自动判断变量的类型
+ 当变量的声明和赋值同时进行时，可以省略类型声明



#### 3. 类型

| 类型    | 例子                    | 说明                         |
| ------- | ----------------------- | ---------------------------- |
| number  | 1，2，3...              | 数值类型                     |
| string  | 'hello', "hello", hello | 字符串类型                   |
| boolean | true, fasle             | 布尔值                       |
| 字面量  | 其本身                  | 限制变量的值就是该字面量的值 |
| any     | *                       | 任意类型                     |
| unknow  | *                       | 类型安全的any                |
| void    | 空值（undefined）       | undefined                    |
| never   | 没有值                  | 不能是任何值                 |
| object  | {name: '孙笑川'}        | 任意的JS对象                 |
| array   | [1,2,3]                 | 任意JS数组                   |
| tuple   | [4,5]                   | 元素，TS新增类型，定长数组   |
| enum    | enum{A, B}              | 枚举类型                     |

**number：**

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: number = 100n;
```

**boolean：**

```typescript
let flag: boolean = true;
```

**string：**

```typescript
let name: string = '孙笑川';
let age: number = 33;
let pepole: string = `我的名字是${name}，今年${age}岁`;
```

**字面量：**

```typescript
//可以使用字面量指定变量的类型，通过字面量可以确定变量的取值范围
let color: 'red' | 'blue' | 'black';
let age: 10 | 30;
```

**any：**

```typescript
let a: any;
a = 4;
a = 'hello';
a= true;
```

**unknown：**

```typescript
let notSure: unknown;
notSure = 'hello';
notSure = 10;
```

**void：**

```typescript
let unusable: void = undefined;
```

**never：**

```typescript
function error(message: string): never {
    throw new Error(message);
}
```

**object：**

```typescript
let obj: object = {}
```

**array：**

```typescript
let list: number = [1,2,3];
let list: Array<number> = [1,2,3];
```

**tuple：**

```typescript
let x: [string, string];
x = ['a','b'];
```

**enum：**

```typescript
enum Status: {
    DONE = 1;
    UNDO = 0;
}
let result = Status.DONE;
```

**类型断言：**

有时变量的类型对于开发者来说是明确的，但TS编译器却不清楚，此时可以通过类型断言来告诉编译器变量的类型，有以下两种形式：

```typescript
let value: unknown = '孙笑川';
let strLength: number = (value as string).length;
```

```typescript
let value: unknown = '药水哥';
let strLength: number = (<string>value).length;
```

