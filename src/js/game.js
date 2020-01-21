import { App, Exercises, Menu, Navbar } from './internal'

// It's required in order to compile asynchronus function
import regeneratorRuntime from "regenerator-runtime"

export class Game {
  static id = '#game'
  static element
  static musicalScores
  static noteButtons
  static buttonsWrapper
  static exercise
  static finalAnswer // true|false
  static goBack
  
  // Game stats
  static questions
  static questionIndex
  static correctAnswers

  // It is not a constructor of class, just a function
  static construct() {
    this.element = document.querySelector(`${App.selector} ${this.id}`)
    this.musicalScores = document.querySelector(`${App.selector} ${this.id} #musical-scores img`)
    this.buttonsWrapper = document.querySelector(`${App.selector} ${this.id} #note-buttons`)
    let buttons = ['C#','D#','E#','F#','G#','A#','B#', '_', 'C','D','E','F','G','A','B', '_', 'C♭','D♭','E♭','F♭','G♭','A♭','B♭']
    this.noteButtons = []
    buttons.forEach((innerHTML) => {
      if (innerHTML == '_') {
        let lineBreak = document.createElement('div')
        lineBreak.className = 'line-break'
        this.buttonsWrapper.appendChild(lineBreak)
      }
      else {
        let btn = document.createElement('button')
        btn.innerHTML = innerHTML
        this.buttonsWrapper.appendChild(btn)
        btn.addEventListener('click', (e) => this.handleClick(e))
        this.noteButtons.push(btn)
      }
    })
    // Присоединяем кнопку "Go back"
    this.goBack = Navbar.createGoBackBtn()
    this.element.appendChild(this.goBack)
  }
  // It is not a destructor of class, just a function
  static destruct() {
    this.musicalScores.src = ''
    this.buttonsWrapper.innerHTML = ''
    this.goBack.remove()
    Navbar.number.innerHTML = ''
    Navbar.accuracy.innerHTML = ''
  }

  static start(exercise) {
    this.exercise = exercise
    let count = this.askCount(exercise)
    this.questions = this.shuffleExercises(exercise, count)
    this.questionIndex = 0
    this.correctAnswers = 0
    this.askPlayer()
  }

  static finish() {
    alert(`Congratulations, you've just finished ${this.exercise.name}`)
    Exercises.fillMenu(Exercises.menuItem)
    Menu.display('exercises')
    // Удаляем из истории 'game', а также 'exercises'
    Menu.history.pop()
    Menu.history.pop()
  }

  static askCount(exercise) {
    let defaultValue = exercise.notes.length
    return prompt("Number of questions? \n(default is 4 * 'number of notes')", defaultValue*4)
  }

  static shuffleExercises(exercise, count) {
    let notes = exercise.notes
      , questions = []
    for (let i = 0; i<count; i++) {
      let index = Math.floor(Math.random() * notes.length)
      questions.push(notes[index]) 
    }
    return questions
  }

  static askPlayer() {
    console.log(this.questions)
    // Если не осталось вопросов в упражнении, то в таком случае завершаем
    if (this.questions.length == this.questionIndex) this.finish() 
    // Скидываем окончательный ответ (используется для счетчиков статистики)
    this.finalAnswer = false
    // Очистить стили для всех кнопок
    let greenBtn = document.querySelector(`${App.selector} .correct-answer`)
    let redBtns = document.querySelectorAll(`${App.selector} .incorrect-answer`)
    if (greenBtn) greenBtn.classList.remove('correct-answer')
    if (redBtns.length > 0) redBtns.forEach(btn => btn.classList.remove('incorrect-answer'))
    // Обновить номер раздачи
    Navbar.refreshNumber(this.questionIndex, this.questions)
    // Обновить изображение с нотой.
    let imgName = this.questions[this.questionIndex]
    console.log(imgName)
    imgName = imgName.replace(/\#/, '%23')
    this.musicalScores.src = `img/notes/${imgName}.png`
    console.log(this.musicalScores.src)
  }

  static handleClick(e) {
    let content = e.srcElement.innerHTML // То что написано на кнопке
    let index = this.questionIndex // Индекс вопроса в массиве
    let question = this.questions[index]

    let res = question.match(/\d* ([CDEFGAB])([12345678])([\#b]?)/)
    let note = res[1], accidential = res[3]
    if (accidential == 'b') accidential = '♭'
    if (content == note+accidential) {
      this.rightAnswer(e.srcElement, this.questions[index])
    }
    else {
      this.wrongAnswer(e.srcElement)
    }
  }

  static async rightAnswer(btn, imgName) {
    let res = imgName.match(/\d* ([CDEFGAB])([12345678])([\#b])?/)
    let mp3 = this.determineSoundName(res[1], res[2], res[3])
    // Закрасить в зеленый цвет:
    btn.classList.add('correct-answer')
    // Обновить точность
    this.refreshAccuracy(true)
    // Проиграть звук
    await this.playSound(mp3)
    this.questionIndex++
    // Переходим к следующему упражнению
    this.askPlayer()
  }

  static wrongAnswer(btn) {
    // Закрасить в красный цвет
    btn.classList.add('incorrect-answer')
    // Обновить точность
    this.refreshAccuracy(false)
  }

  static refreshAccuracy(isCorrect) {
    if (this.finalAnswer) return
    if (isCorrect) {
      this.correctAnswers++
      Navbar.refreshAcc(this.correctAnswers, this.questionIndex)
    }
    else {
      Navbar.refreshAcc(this.correctAnswers, this.questionIndex)
    }
    // Игрок ответил на вопрос
    this.finalAnswer = true
  }

  static determineSoundName(note, number, shift) {
    let arr = [
      'C1', 'Cs1', 'D1', 'Ds1', 'E1', 'F1', 'Fs1', 'G1', 'Gs1', 'A1', 'As1', 'B1',
      'C2', 'Cs2', 'D2', 'Ds2', 'E2', 'F2', 'Fs2', 'G2', 'Gs2', 'A2', 'As2', 'B2',
      'C3', 'Cs3', 'D3', 'Ds3', 'E3', 'F3', 'Fs3', 'G3', 'Gs3', 'A3', 'As3', 'B3',
      'C4', 'Cs4', 'D4', 'Ds4', 'E4', 'F4', 'Fs4', 'G4', 'Gs4', 'A4', 'As4', 'B4',
      'C5', 'Cs5', 'D5', 'Ds5', 'E5', 'F5', 'Fs5', 'G5', 'Gs5', 'A5', 'As5', 'B5',
      'C6', 'Cs6', 'D6', 'Ds6', 'E6', 'F6', 'Fs6', 'G6', 'Gs6', 'A6', 'As6', 'B6',
      'C7', 'Cs7', 'D7', 'Ds7', 'E7', 'F7', 'Fs7', 'G7', 'Gs7', 'A7', 'As7', 'B7',
      'C8', 'Cs8', 'D8', 'Ds8', 'E8', 'F8', 'Fs8', 'G8', 'Gs8', 'A8', 'As8', 'B8',
    ]
    let index = arr.indexOf(note+number)
    switch (shift) {
      case '#': return arr[index+1]
      case 'b': return arr[index-1]
      case undefined: return arr[index]
      default: return 'ERROR'
    }
  }

  static playSound(soundName) {
    return new Promise(resolve => {
      let audio = new Audio(`mp3/${soundName}.mp3`)
      audio.play()
      setTimeout(() => {
        resolve(1)
      }, 1000)
      // audio.addEventListener('ended', function() {
      // }, {once: true})
    })
  }

}