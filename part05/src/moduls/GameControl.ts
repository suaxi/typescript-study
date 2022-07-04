import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

//游戏控制器，控制其他的类
class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    //存储蛇的移动方向（按键方向）
    direction: string = '';
    //标志位判断蛇是否还存活
    isLive = true;


    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    //游戏初始化（开始）
    init() {
        //绑定键盘事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        //调用run方法，使蛇移动
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        //检查event.key的合法性
        //当用按下键盘时，修改direction属性
        this.direction = event.key;
    }

    //蛇移动的方法
    run() {
        //根据this.direction使蛇的位置改变
        let X = this.snake.x;
        let Y = this.snake.y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                //向上移动 top减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                //向上移动 left减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        //判断蛇是否吃到食物
        this.checkEat(X, Y)

        //修改蛇的位置
        try {
            this.snake.x = X;
            this.snake.y = Y;
        } catch (e) {
            //游戏结束
            // @ts-ignore
            alert(e.message)
            this.isLive = false
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    checkEat(X: number, Y: number) {
        if (X === this.food.x && Y === this.food.y) {
            console.log("蛇吃到了食物！")
            //生成新的食物
            this.food.change()
            //增加积分
            this.scorePanel.addScore()
            //蛇长度增加
            this.snake.addBody()
        }
    }
}

export default GameControl;