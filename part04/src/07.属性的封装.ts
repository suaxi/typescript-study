(function () {

    class Person {
        /**
         * 访问修饰符
         * public 默认值，可以在任意位置访问
         * private 私有属性，只能在类内部进行访问
         * protected 受保护的，只能在当前类及其子类中访问
         */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        // //getter
        // getName() {
        //     return this.name;
        // }
        //
        // //setter
        // setName(name: string) {
        //     this.name = name;
        // }
        //
        // setAge(age: number) {
        //     if (age < 0) {
        //         alert('年龄不能小于0！')
        //         return;
        //     }
        //     this.age = age;
        // }

        //TS中设置get方法的方式
        get name() {
            console.log('name属性的getter方法执行了');
            return this._name;
        }

        set name(name: string) {
            console.log('name属性的setter方法执行了');
            this._name = name;
        }
    }

    const p = new Person('孙笑川', 33);
    //p.name = '药水哥';
    // console.log(p);
    // console.log(p.getName());
    //
    // p.setName('药水哥');
    // p.setAge(-1);
    // console.log(p);

    p.name = '药水哥';
    console.log(p.name);

    //简写形式
    class A {
        constructor(public name: string, public age: number) {
        }
    }

    const a = new A('Giao哥', 33);
    console.log(a);

})();