//积分牌
class ScorePanel {
    constructor(maxLevel = 10, upScore = 10) {
        //记录分数和等级
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    //加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        //等级提升（每累计10分升级一次）
        if (this.score % this.upScore === 0) {
            this.levelUp();
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
