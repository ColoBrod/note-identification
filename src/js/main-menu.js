import { App, Exercises, Menu } from './internal'
import starImg from '../img/star.png'

console.log('Star Image: ', starImg)

export class MainMenu {
  static id = '#main-menu'
  static element 

  // It is not a constructor of class, just a function
  static construct() {
    this.items = []
    this.element = document.querySelector(`${App.selector} ${this.id} .list-of-exercise-lvls`)
    App.menu.forEach( (menuElement, index, arr) => {
      let div = this.createMenuElement(menuElement.name, menuElement.id, menuElement.stars)
      this.element.appendChild(div)
    })
  }
  
  // It is not a destructor of class, just a function
  static destruct() {
    this.element.innerHTML = ''
  }

  static createMenuElement(title, id, stars) {
    let div = document.createElement('div')
    div.className = 'exercise-lvl'
    div.id = id
    // Создаем дочерние элементы
    let divStars = document.createElement('div')
      , divTitle = document.createElement('div')
      , divBtn = document.createElement('div')
    divStars.className = 'exercise-lvl-stars'
    divTitle.className = 'exercise-lvl-title'
    divBtn.className = 'exercise-lvl-button'
    divTitle.innerHTML = title
    divBtn.innerHTML = 'Take Test'
    // Присоединяем звезды к элементу .exercise-lvl-stars
    for (let i = stars; i > 0; i--) {
      let divStar = document.createElement('img')
      divStar.src = starImg
      divStar.alt = 'star'
      divStars.appendChild(divStar)
    }
    // Присоединяем дочерние элементы
    div.appendChild(divStars)
    div.appendChild(divTitle)
    div.appendChild(divBtn)
    // При нажатии на кнопку, переходим в другое меню
    divBtn.addEventListener('click', () => this.handleClick(id), { once: true })
    return div
  }

  static handleClick(id) {
    let menuItem = App.menu.filter(el => el.id == id)[0]
    Menu.display('exercises')
    Exercises.fillMenu(menuItem)
  }

}