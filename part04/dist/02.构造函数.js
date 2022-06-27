"use strict";
class Dog {
    /**
     * 构造函数：在对象创建时调用
     * 在实例方法中，this表示当前的实例
     */
    constructor(name, age) {
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
//# sourceMappingURL=02.%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0.js.map