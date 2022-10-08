export class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  snake: HTMLElement

  constructor() {
    this.snake = document.getElementById('#snake')!
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
    this.head.style.left = value + 'px'
  }
  set Y(value: number) {
    this.head.style.top = value + 'px'
  }
  addBody() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }
}
