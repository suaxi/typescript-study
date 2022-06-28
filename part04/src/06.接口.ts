(function () {
    /**
     * 接口
     * 作用：定义一个类中应该包含哪些属性和方法
     * 同时，接口也可以当作类型声明来使用
     */
    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
        sex: string
    }

    const myInterface = {
        name: '孙笑川',
        age: 33,
        sex: '男'
    };

    /**
     * 1.可以在定义类的时候去限制类的结构
     * 2.接口中的所有属性都不能有实际的值（只定义结构，不考虑实际值）
     * 3.接口中的方法都是抽象方法
     */
    interface myTest {
        name: string;
        say(): void;
    }

    /**
     * 实现接口：使类满足接口的要求
     */
    class myClass implements myTest {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        say(): void {
            console.log('myClass实现了myTest接口');
        }

    }

    const myClazz = new myClass('孙笑川');
    myClazz.say();

})();