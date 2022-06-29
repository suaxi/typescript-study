//积分牌
class ScorePanel {
    //记录分数和等级
    score = 0;
    level = 1;

    //分数和等级所在的元素
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    //等级上限
    maxLevel: number;
    //升级规则
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        //等级提升（每累计10分升级一次）
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }


    //升级
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;

// const score = new scorePanel(20, 5);
// score.addScore()
// for (let i = 0; i < 10; i++) {
//     score.addScore()
// }