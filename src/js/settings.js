import { App, Navbar } from './internal'
import { Game } from './game'

export class Settings {
  static id = '#settings'
  static element
  static goBack
  static helpers
  static nextQuestion

  // It is not a constructor of class, just a function
  static construct() {
    this.element = document.querySelector(`${App.selector} ${this.id}`)
    this.goBack = Navbar.createGoBackBtn()
    this.element.appendChild(this.goBack)
    
    this.helpers = document.querySelector(".setting-helpers input")
    this.helpers.addEventListener('click', (e) => this.toggleSlider(e.target) )
    
    this.nextQuestion = document.querySelector(".setting-nextQuestion input")
    this.nextQuestion.addEventListener('change', (e) => this.numberInput(e.target) )

    this.init()

    // this.selectSlider()
    console.log('Settings menu constructed')
    console.log("Settings: ", App.settings)
  }

  // Устанавливает в регуляторах значения из App.settings (cookies пользователя)
  static init() {
    let settings = App.settings
    if (settings.helpers === true) this.helpers.checked = true
    this.nextQuestion.value = App.settings.nextQuestion
    // if (settings.nextQuestion)
  }

  // It is not a destructor of class, just a function
  static destruct() {
    this.goBack.remove()
    console.log('Settings menu destructed')
  }

  static toggleSlider(el) {
    let className = el.parentElement.parentElement.className
      , option = className.match(/setting-([a-zA-Z\-]*)/)[1]
      , value
    if (el.checked) value = true
    else value = false
    App.writeSettings(option, value)
    App.settings[option] = value
    switch (option) {
      case "helpers":
        Game.toggleHelpers(value)
        break
    }
  }

  static numberInput(el) {
    let className = el.parentElement.className
      , option = className.match(/setting-([a-zA-Z\-]*)/)[1]
      , value = parseFloat(el.value)
    // Валидация. Если число меньше 0, то отказать.
    if (value < 0 || value == NaN) {
      this.nextQuestion.value = App.settings.nextQuestion
      return
    }
    App.writeSettings(option, value)
    App.settings[option] = value
    console.log(App.settings)
  }

}