//食物
class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        //获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    //获取食物x轴坐标
    get x() {
        return this.element.offsetLeft;
    }

    //获取食物y轴坐标
    get y() {
        return this.element.offsetTop;
    }

    //食物位置随机
    change() {
        //食物的位置最小0，最大290，且必须是10的整数倍
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;

// const food = new Food();
// food.change()
// console.log(food);