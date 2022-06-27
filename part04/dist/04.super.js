"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log(this.name + '，在叫');
        }
    }
    class Dog extends Animal {
        //如果在子类中写了构造函数，必须对父类的构造函数进行调用
        constructor(name, age) {
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
//# sourceMappingURL=04.super.js.map