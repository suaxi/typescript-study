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


    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    //游戏初始化（开始）
    init() {
        //绑定键盘事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }

    keydownHandler(event: KeyboardEvent) {
        //检查event.key的合法性
        //当用按下键盘时，修改direction属性
        this.direction = event.key;
    }
}

export default GameControl;