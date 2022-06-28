"use strict";
(function () {
    const myInterface = {
        name: '孙笑川',
        age: 33,
        sex: '男'
    };
    /**
     * 实现接口：使类满足接口的要求
     */
    class myClass {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log('myClass实现了myTest接口');
        }
    }
    const myClazz = new myClass('孙笑川');
    myClazz.say();
})();
//# sourceMappingURL=06.%E6%8E%A5%E5%8F%A3.js.map