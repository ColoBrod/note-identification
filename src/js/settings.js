// import App from './app'
// import Exercises from './exercises'
// import Game from './game'
// import MainMenu from './main-menu'
// import Menu from './menu'
// import Navbar from './navbar'
// import Settings from './exercises'
// import Tooltip from './tooltip'

import { App, Navbar } from './internal'

export class Settings {
  static id = '#settings'
  static element
  static goBack

  // It is not a constructor of class, just a function
  static construct() {
    this.element = document.querySelector(`${App.selector} ${this.id}`)
    this.goBack = Navbar.createGoBackBtn()
    this.element.appendChild(this.goBack)
    console.log('Settings menu constructed')
    let slider = document.querySelector(".setting-helpers input")
    slider.addEventListener('click', (e) => this.logSlider(e.target) )
    // this.selectSlider()
  }
  // It is not a destructor of class, just a function
  static destruct() {
    this.goBack.remove()
    console.log('Settings menu destructed')
  }

  static logSlider(el) {
    if (el.checked) console.log('Activated', el)
    else console.log('Deactivated', el)
  }

  // static selectSlider() {
  //   
    
    
  //   console.log(slider)
  // }

}