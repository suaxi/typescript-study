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