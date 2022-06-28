"use strict";
(function () {
    /**
     * 抽象类不能用来创建的对象
     * 是专门用来被继承的类
     * 抽象类中可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        say() {
            console.log('汪汪汪~');
        }
    }
    const dog = new Dog('旺财');
    dog.say();
})();
//# sourceMappingURL=05.%E6%8A%BD%E8%B1%A1%E7%B1%BB.js.map