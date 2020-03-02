require.context('../img/notes/', true, /\.png$/)

// Main styles
import '../scss/main.scss'

import { App, Navbar, Menu, Exercises } from './internal'

App.checkUserBrowser()
App.readSettings()
Navbar.initialize()
Navbar.setListners()
Menu.display('main')

startGameFromUrlParams()

function startGameFromUrlParams() {
  let url_string = window.location.href
    , url = new URL(url_string)
    , level = url.searchParams.get("level")
    , exercise = url.searchParams.get("exercise")
    , questions = url.searchParams.get("questions")
  if (level && exercise && questions) {
    switch(level) {
      case 'novice': level = 0
          break
      case 'apprentice': level = 1
        break
      case 'adept': level = 2
        break
      case 'expert': level = 3
        break
      case 'master': level = 4
        break
      default: return
    }
    switch(exercise) {
      case 'treble': exercise = 0
        break
      case 'bass': exercise = 1
        break
      case 'grandStaff': exercise = 2
        break
      case 'alto': exercise = 3
        break
      default: return
    }
  }
  Exercises.handleClick(App.menu[level].exercise[exercise], App.menu[level].testName, questions)
}

