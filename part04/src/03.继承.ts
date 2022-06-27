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