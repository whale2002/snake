export class Food {
  element: HTMLElement

  constructor() {
    this.element = document.getElementById('food')!
  }
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }
  change() {
    const x = Math.round(Math.random() * 29) * 10
    const y = Math.round(Math.random() * 29) * 10
    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
  }
}

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