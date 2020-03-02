import { App, Exercises, Game, MainMenu, Navbar, Settings } from './internal'

export class Menu {
  static page = {
    main: {
      id: MainMenu.id,
      construct: () => MainMenu.construct(),
      destruct: () => MainMenu.destruct(),
      displayed: false,
    },
    exercises: {
      // id: '#exercises',
      id: Exercises.id,
      construct: () => Exercises.construct(),
      destruct: () => Exercises.destruct(),
      displayed: false,
    },
    game: {
      id: '#game',
      construct: () => Game.construct(),
      destruct: () => Game.destruct(),
      displayed: false,
    },
    settings: {
      id: '#settings',
      construct: () => Settings.construct(),
      destruct: () => Settings.destruct(),
      displayed: false,
    },
  }
  static history = []
  static selectors = {
    main: '#main-menu',
    exercises: '#exercises',
    game: '#game',
    settings: '#settings'
  }

  static detectCurrentPage() {
    for (let key in this.page) if (this.page[key].displayed == true) return key
  }


  // Отображает (display: block|none) блок меню, одновременно скрывая остальные блоки
  static display(name) {
    let page = this.page
    let currentPage = this.detectCurrentPage()
    if (currentPage) this.history.push(currentPage)
    for (let key in page) {
      if (name == key) this.displayBlock(page[key])
      else this.hideBlock(page[key])
    }
    Navbar.render()
  }

  // static back(name) {
  //   let page = this.page
  //   for (let key in page) {
  //     if (name == key) this.displayBlock(page[key])
  //     else this.hideBlock(page[key])
  //   }
  // }

  static displayBlock(page) {
    if (page.displayed) return
    page.displayed = true
    // Constructing items
    page.construct()
    // Displaing block on page
    let element = document.querySelector(`${App.selector} ${page.id}`)
    element.style.display = 'block'
  }

  static hideBlock(page) {
    if (!page.displayed) return
    page.displayed = false
    // Destructing items
    page.destruct()
    // Hiding block from page
    let element = document.querySelector(`${App.selector} ${page.id}`)
    element.style.display = 'none'
  }

}