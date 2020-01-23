// Files
// function importAll (r) {
//   r.keys().forEach(r);
// }
require.context('../img/notes/', true, /\.png$/)
// let images = require.context('../img/notes/', true, /\.png$/).keys()
// images.forEach(img => {
//   img = img.replace('./', '')
//   console.log(img)
//   // import(`./img/notes/${img}`)
// })
// import '../img/logo.png'
// import '../img/star.png'

// Main styles
import '../scss/main.scss'

import { App, Navbar, Menu } from './internal'

App.checkUserBrowser()
App.readSettings()
Navbar.initialize()
Navbar.setListners()
Menu.display('main')


