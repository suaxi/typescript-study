import Food from "./Food";

class Snake {
    //头
    head: HTMLElement;
    //身体（包括蛇头）
    bodies: HTMLCollection;
    //获取蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    //获取蛇的坐标（蛇头）
    get x() {
        return this.head.offsetLeft;
    }

    get y() {
        return this.head.offsetTop;
    }

    //设置蛇头的坐标
    set x(value: number) {
        //如果新值和旧值相同，则直接返回不再修改
        if (this.x === value) {
            return
        }

        //x值的合法范围（0-290之间）
        if (value < 0 || value > 290) {
            throw new Error("游戏结束！")
        }
        this.head.style.left = value + 'px';
    }

    set y(value: number) {
        if (this.y === value) {
            return
        }

        //x值的合法范围（0-290之间）
        if (value < 0 || value > 290) {
            throw new Error("游戏结束！")
        }
        this.head.style.top = value + 'px';
    }

    //蛇吃到食物身体加长
    addBody() {
        //向蛇容器的末尾添加一个div
        // @ts-ignore
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}

export default Snake;