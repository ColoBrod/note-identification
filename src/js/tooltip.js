import { App } from './internal'

export class Tooltip {
  static timer
  static element

  static display(txt,x,y) {
    let app = document.querySelector(App.selector) 
    this.element = document.createElement('div')
    this.element.className = 'tooltip'
    this.element.style.left = `${x}px`
    this.element.style.top = `${y}px`
    this.element.innerHTML = txt
    app.appendChild(this.element)
  }

  static destroy() {
    this.element.remove()
  }
}