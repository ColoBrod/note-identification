import { App, Game, Menu, Navbar } from './internal'

export class Exercises {
  static id = '#exercises'
  static element
  static menuItem

  // It is not a constructor of class, just a function
  static construct() {
    this.element = document.querySelector(`${App.selector} ${this.id}`)
    console.log('Exercises menu constructed')
  }
  // It is not a destructor of class, just a function
  static destruct() {
    this.element.innerHTML = ''
    console.log('Exercises menu destructed')
  }

  static fillMenu(menuItem) {
    this.menuItem = menuItem
    let exercises = menuItem.exercise
      , testName = menuItem.testName
    exercises.forEach(exercise => {
      let div = this.createMenuElement(exercise.name, 100, 100)
      this.element.appendChild(div)
      div.addEventListener('click', () => this.handleClick(exercise, testName), { once: true })
    })
    // Присоединяем кнопку "Go back"
    let goBack = Navbar.createGoBackBtn()
    this.element.appendChild(goBack)
    
  }

  static createMenuElement(title, perfomance, accuracy) {
    let div = document.createElement('div')
    div.className = 'exercise'
    // Создаем дочерние элементы
    let divTitle = document.createElement('div')
      , divPerfomance = document.createElement('div')
      , divAccuracy = document.createElement('div')
    divTitle.className = 'title'
    divPerfomance.className = 'perfomance'
    divAccuracy.className = 'accuracy'
    divTitle.innerHTML = title
    divPerfomance.innerHTML = `Per: ${perfomance}%`
    divAccuracy.innerHTML = `Acc: ${accuracy}%`
    // Присоединяем дочерние элементы
    div.appendChild(divTitle)
    div.appendChild(divPerfomance)
    div.appendChild(divAccuracy)
    return div
  }

  static handleClick(exercise, testName, count = undefined) {
    Menu.display('game')
    Game.start(exercise, count)
    Game.title.innerHTML = testName
    
    // let menuItem = App.menu.filter(el => el.id == id)[0]
    // Exercises.fillMenu(menuItem)
  }

}