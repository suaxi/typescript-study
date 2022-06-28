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



### 三、编译选项

#### 1. 自动编译文件

可以使用`tsc xxx.ts -w`，自动监视文件的变化且在文件发生变化时自动编译



#### 2. 自动编译整个项目

在配置了 `tsconfig.json` 文件时，使用 `tsc` 命令可以自动编译当前项目下的文件

**配置选项：**

**include：**

+ 指定需要编译的文件目录
+ 默认值 `[**/*]` （** 表示任意文件目录，* 表示任意文件）

```json
"include": [
    "src/**/*"
]
```

**exclude：**

+ 需要排除的文件目录
+ 默认值：`["node_modules", "bower_components", "jspm_packages"]`

```json
"exclude": [
    "src/test/**/*"
]
```

**extends：**

+ 定义被继承的配置文件

```json
"extends": [
    "./config/base"
]
```

**compilerOptions：**

编译选项

+ target：指定ts被编译的目标版本

  + 可选值：`'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'esnext'`

  + 示例

    ```json
    "compilerOptions": {
        "target": "ES2015"
    }
    ```

+ lib：指定项目中要使用的库（宿主环境）

  + 可选值：`'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022'...`

  + 示例

    ```json
    "compilerOptions": {
        "lib": ["es6", "dom"]
    }
    ```

+ module：指定要使用的模块化的规范

  + 可选值：`'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', 'node16', 'nodenext'`

  + 示例

    ```json
    "compilerOptions": {
        "module": "ES2015"
    }
    ```

+ outDir：指定编译后文件的存放目录

  默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir可以改变编译后文件的存放位置

  ```json
  "compilerOptions": {
      "outDir": "./dist"
  }
  ```

+ outFilr：将代码合并为一个文件

  将所有的文件编译为一个js，如果 `module` 指定了 `None、System、AMD` 则会将对应模块一起合并到文件中

  ```json
  "compilerOptions": {
      "outFile": "./dist/app.js"
  }
  ```

+ allowJs：是否对js文件进行编译，默认为false

+ checkJs：是否检查js代码是否符合语法规范，默认为false

+ removeComments：是否移除注释，默认为false

+ noEmit：不生成编译后的文件，默认为false

+ noEmitOnError：当有错误时不生成编译后的代码，默认为false

+ alwaysStrict：设置编译后的文件是否使用严格模式，默认为false

+ noImplicitAny：变量未指定类型时，不启用隐式any类型，默认为false（开启）

+ noImplicitThis：不允许不明确类型的 this，默认为false（开启）

+ strictNullChecks：严格检查空值

+ strict：所有严格检查的总开关（值为false时所以检查不生效）



### 四、webpack打包

**基本步骤：**

#### 1. 初始化项目

进入指定目录，执行 `npm init -y` （创建`pacjage.json`文件）

#### 2. 下载构建工具

`npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin typescript ts-loader`

+ webpack构建工具
+ webpack-cli命令行工具
+ webpack-dev-server 开发工具
+ html-webpack-plugin html插件
+ clean-webpack-plugin 清理插件
+ typescript ts编译器
+ ts-loader ts加载器

#### 3. 根目录下创建webpack配置文件

```js
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //指定入口文件
    entry: "./src/index.ts",
    output: {
        //打包文件所在目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件名
        filename: "bundle.js"
    },
    mode: 'development',
    //指定打包时所使用的模块
    module: {
        rules: [
            {
                //规则生效的文件
                test: /\.ts$/,
                //加载器
                use: 'ts-loader',
                //要排除的文件
                exclude: /node_modules/
            }
        ]
    },
    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: 'webpack打包插件'
            template: "./src/index.html"
        }),
    ],

    //设置需要引用的模块
    resolve: {
        extensions: ['.ts', ".js"]
    }
}
```

#### 4. Babel

（1）安装依赖包

`npm i -D @babel/core @babel/preset-env babel-loader core-js`

+ @babel/core：babel核心工具
+ @babel/preset-env：babel预定义环境
+ babel-loader：加载器
+ core-js：用于让老版本浏览器支持新版ES语法

（2）修改`webpack.config.js`配置文件

```js
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    //指定入口文件
    entry: "./src/index.ts",
    output: {
        //打包文件所在目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件名
        filename: "bundle.js",
        environment: {
            //不使用箭头函数
            arrowFunction: false
        }
    },
    mode: 'development',
    //指定打包时所使用的模块
    module: {
        rules: [
            {
                //规则生效的文件
                test: /\.ts$/,
                //加载器（执行顺序为倒序，ts->js->转译）
                use: [
                    //配置babel
                    {
                        loader: 'babel-loader',
                        options: {
                            //环境预设置
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                            "chrome": "51",
                                            "ie": "11"
                                        },
                                        "corejs": "3",
                                        //使用corejs的方式，usage 按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'],
                //要排除的文件
                exclude: /node_modules/
            }
        ]
    },
    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: 'webpack打包插件'
            template: "./src/index.html"
        }),
    ],

    //设置需要引用的模块
    resolve: {
        extensions: ['.ts', ".js"]
    }
}
```



### 五、面向对象

#### 1. 类

```typescript
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
```



#### 2. 构造函数

```typescript
class Dog {
    name: string;
    age: number;

    /**
     * 构造函数：在对象创建时调用
     * 在实例方法中，this表示当前的实例
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(this.name + '，汪汪汪');
    }
}

const dog1 = new Dog('卡星五', 3);
console.log(dog1);
dog1.say();

const dog2 = new Dog('旺财', 4);
console.log(dog2);
```



#### 3. 继承

```typescript
(function () {

    //动物
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        say() {
            console.log(this.name + '，在叫！');
        }
    }

    /**
     * 使用继承后，子类拥有父类所有的属性和方法
     */

    //狗
    class Dog extends Animal {

        /**
         * 子类重写父类的方法
         */
        say() {
            console.log(`${this.name}，汪汪汪`);
        }

        run() {
            console.log(`${this.name}，边跑边叫`);
        }
    }

    const dog = new Dog('旺财', 2);
    dog.say();
    dog.run();

    //猫
    class Cat extends Animal {

    }

    const cat = new Cat('咪咪', 1);
    cat.say();
})();
```



#### 4. super关键字

```typescript
(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        say() {
            console.log(this.name + '，在叫');
        }
    }

    class Dog extends Animal {

        age: number;

        //如果在子类中写了构造函数，必须对父类的构造函数进行调用
        constructor(name: string, age: number) {
            super(name);
            this.age = age;
        }

        say() {
            //super表示当前类的父类
            super.say();
        }
    }

    const dog = new Dog('旺财', 2);
    dog.say();
})();
```



#### 5. 抽象类

```typescript
(function () {
    /**
     * 抽象类不能用来创建的对象
     * 是专门用来被继承的类
     * 抽象类中可以添加抽象方法
     */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        /**
         * 抽象方法以abstract开头，没有方法体
         * 只能定义在抽象类中，且子类必须重写父类的抽象方法
         */
        abstract say(): void;
    }

    class Dog extends Animal {
        say() {
            console.log('汪汪汪~');
        }
    }

    const dog = new Dog('旺财');
    dog.say();
})();
```

