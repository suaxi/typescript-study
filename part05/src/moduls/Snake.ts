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

        //禁止掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            //如果发生了掉头，则让蛇相反方向继续前进
            if (value > this.x) {
                //如果新值大于旧值，则说明蛇向右走，发生了掉头
                value = this.x - 10;
            } else {
                value = this.x + 10
            }
        }

        //移动身体
        this.moveBody()

        this.head.style.left = value + 'px';

        this.checkHeadPosition()
    }

    set y(value: number) {
        if (this.y === value) {
            return
        }

        //x值的合法范围（0-290之间）
        if (value < 0 || value > 290) {
            throw new Error("游戏结束！")
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            //如果发生了掉头，则让蛇相反方向继续前进
            if (value > this.y) {
                //如果新值大于旧值，则说明蛇向上走，发生了掉头
                value = this.y - 10;
            } else {
                value = this.y + 10
            }
        }

        this.moveBody()

        this.head.style.top = value + 'px';

        this.checkHeadPosition()
    }

    //蛇吃到食物身体加长
    addBody() {
        //向蛇容器的末尾添加一个div
        // @ts-ignore
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    //蛇身体移动
    moveBody() {
        //从后往前修改，后一个位置 = 前一个位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //前一个身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            //将值设置到当前的身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    //身体穿透检查
    checkHeadPosition() {
        //获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {
                throw new Error('撞到自己了！')
            }
        }
    }
}

export default Snake;