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