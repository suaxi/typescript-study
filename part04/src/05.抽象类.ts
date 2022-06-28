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