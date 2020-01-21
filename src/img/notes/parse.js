const fs = require('fs')
fs.readdir('.', (err, files) => {
  files.forEach(file => {
    let res = file.match(/(\d*) (.*)\.png/)
    if (res) {
      let number = parseInt(res[1])
      let note = res[2]
      if (number >= 475 && number <= 561) console.log(`${number} ${note}`)
    }
  })
})