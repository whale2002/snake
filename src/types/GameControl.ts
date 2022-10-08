import { Food, Snake, ScorePanel } from './index'

interface IProps {
  [key: string]: string
}
const directionMap: IProps = {
  ArrowUp: 'Up',
  ArrowDown: 'Down',
  ArrowLeft: 'Left',
  ArrowRight: 'Right'
}

export class GameControl {
  snake: Snake
  food: Food
  scrollPanel: ScorePanel
  direction: string = ''
  isLive: boolean = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scrollPanel = new ScorePanel()

    this.init()
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.direction = directionMap[event.key]
  }

  init = () => {
    document.addEventListener('keydown', this.handleKeyDown)
    this.move()
  }

  move = () => {
    let x = this.snake.X
    let y = this.snake.Y

    switch (this.direction) {
      case 'Up':
        y -= 10
        break
      case 'Down':
        y += 10
        break
      case 'Left':
        x -= 10
        break
      case 'Right':
        x += 10
        break
    }

    this.checkEat(x, y)

    try {
      this.snake.X = x
      this.snake.Y = y
    } catch (e) {
      this.isLive = false
      alert('GAME OVER!')
    }

    this.isLive &&
      setTimeout(() => {
        this.move()
      }, 300 - (this.scrollPanel.level - 1) * 30)
  }

  checkEat = (x: number, y: number) => {
    if (x === this.food.X && y === this.food.Y) {
      this.food.change()
      this.scrollPanel.addScore()
      this.snake.addBody()
    }
  }
}
