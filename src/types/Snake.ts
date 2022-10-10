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
    // 移动身体
    this.moveBody()
    // 移动头部
    this.head.style.left = value + 'px'
  }
  set Y(value: number) {
    if (this.Y === value) return

    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了!')
    }
    // 移动身体
    this.moveBody()
    // 移动头部
    this.head.style.top = value + 'px'
  }
  addBody() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop

      ;(this.bodies[i] as HTMLElement).style.left = x + 'px'
      ;(this.bodies[i] as HTMLElement).style.top = y + 'px'
    }
  }
}
