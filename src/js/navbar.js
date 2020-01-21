import { App, Exercises, Menu, Tooltip } from './internal'

export class Navbar {

  static back
  static settings
  static number
  static accuracy

  static initialize() {
    this.back = document.querySelector(`${App.selector} #navbar-back`)
    this.settings = document.querySelector(`${App.selector} #navbar-settings`)
    this.number = document.querySelector(`${App.selector} #navbar-game-number`)
    this.accuracy = document.querySelector(`${App.selector} #navbar-game-accuracy`)
    this.render()
  }

  static render() {
    if (Menu.history.length == 0) this.back.style.display = 'none'
    else this.back.style.display = 'block'
    if (Menu.detectCurrentPage() != 'game') {
      this.number.style.display = 'none'
      this.accuracy.style.display = 'none'
    }
    else {
      this.number.style.display = 'block'
      this.accuracy.style.display = 'none'
    }
  }

  static refreshNumber(index, arr) {
    this.number.innerHTML = `${index+1}/${arr.length}`
  }

  static refreshAcc(correct, index) {
    let acc = correct / (index+1)
    acc *= 100
    acc = Math.round(acc)
    this.accuracy.innerHTML = `${acc}%`
  }

  static setListners() {
    this.back.addEventListener('click', this.handleBackClick)
    this.settings.addEventListener('click', this.handleSettingsClick)
    this.number.addEventListener('mouseover', e => this.handelNumberOver(e) )
    this.number.addEventListener('mouseout', this.handelNumberOut)
    this.accuracy.addEventListener('mouseover', e => this.handleAccuracyOver(e) )
    this.accuracy.addEventListener('mouseout', this.handleAccuracyOut)
  }

  
  static handleBackClick = () => {
    if (Menu.history.length == 0) return
    let lastInHistory = Menu.history[Menu.history.length - 1]
    let page = Menu.page
    for (let key in page) {
      if (lastInHistory == key) Menu.displayBlock(page[key])
      else Menu.hideBlock(page[key])
    }
    if (lastInHistory == 'exercises') Exercises.fillMenu(Exercises.menuItem)
    // if (lastInHistory == 'game' && Menu.detectCurrentPage() != 'settings') {
    //   Menu.history.pop()
    //   return this.handleBackClick
    // }

    // Удаляем страницу из истории
    Menu.history.pop()
    this.render()
  }

  static handleSettingsClick() {
    Menu.display('settings')
  }

  static handelNumberOver(e) {
    Tooltip.timer = setTimeout(function() {
      Tooltip.display('Perfomance: current exercise number.', e.clientX, e.clientY)
    }, 1000)
  }

  static handelNumberOut() {
    if (Tooltip.timer) clearTimeout(Tooltip.timer)
    if (Tooltip.element) Tooltip.destroy()
  }

  static handleAccuracyOver(e) {
    Tooltip.timer = setTimeout(function() {
      Tooltip.display('Your accuracy.', e.clientX, e.clientY)
    }, 1000)
  }

  static handleAccuracyOut() {
    if (Tooltip.timer) clearTimeout(Tooltip.timer)
    if (Tooltip.element) Tooltip.destroy()
  }

  static createGoBackBtn() {
    let goBack = document.createElement('div')
    goBack.id = "go-back"
    goBack.innerHTML = "&lt Go Back"
    goBack.addEventListener('click', this.handleBackClick, { once: true })
    return goBack
  }

}