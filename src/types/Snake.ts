export class Snake {
  snake: HTMLElement
  head: HTMLElement
  bodies: HTMLCollection

  constructor() {
    this.snake = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = this.snake?.getElementsByTagName('div')
  }

  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  set X(value: number) {
    if (this.X === value) return

    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了!')
    }

    this.head.style.left = value + 'px'
  }
  set Y(value: number) {
    if (this.Y === value) return

    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了!')
    }

    this.head.style.top = value + 'px'
  }
  addBody() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }
}
