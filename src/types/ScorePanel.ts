export class ScorePanel {
  score: number
  level: number
  maxLevel: number
  upScore: number
  scoreElement: HTMLElement
  levelElement: HTMLElement

  constructor(maxLevel = 10, upScore = 10) {
    this.score = 0
    this.level = 1
    this.maxLevel = maxLevel
    this.upScore = upScore
    this.scoreElement = document.getElementById('score')!
    this.levelElement = document.getElementById('level')!
  }

  addScore() {
    this.score++
    this.scoreElement.innerHTML = this.score + ''

    if (this.score % this.upScore === 0) this.levelUp()
  }
  levelUp() {
    if (this.level < this.maxLevel) {
      this.level++
      this.levelElement.innerHTML = this.level + ''
    }
  }
}
