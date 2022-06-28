"use strict";
(function () {
    class Person {
        constructor(name, age) {
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
        set name(name) {
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
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const a = new A('Giao哥', 33);
    console.log(a);
})();
//# sourceMappingURL=07.%E5%B1%9E%E6%80%A7%E7%9A%84%E5%B0%81%E8%A3%85.js.map