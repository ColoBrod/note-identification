// This line should be removed in production
import '../teacher.html'
import '../scss/teacher.scss'

// let apiUrl = "http://music.com/?page_id=2720"
let apiUrl = "http://phantomserver8.website/music/app-api"
  , students = getStudents()
  , tbody = document.querySelector("table>tbody")
  , nextBtn = document.querySelector("#first-step button#next-step")
  , firstStep = document.querySelector("#first-step")
  , secondStep = document.querySelector("#second-step")
  , submitBtn = document.querySelector("#second-step button#submit")
  , clearBtn = document.querySelector("#second-step button#clear")
  , goBackBtn = document.querySelector("#second-step button#go-back")
  , emails
  , searchbox = document.querySelector("#first-step .searchbox input")
  , searchboxBtn = document.querySelector("#first-step .searchbox button")

populateTable(students)
nextBtn.addEventListener("click", nextStep )
goBackBtn.addEventListener("click", displayFirstStep)
clearBtn.addEventListener("click", clearSecondStep)
submitBtn.addEventListener("click", submitSecondStep)
searchbox.addEventListener("change", searchStudent)
searchboxBtn.addEventListener("click", searchStudent)


function getStudents() {
  let res = httpRequest(apiUrl, "get_students")
  return JSON.parse(res)
}

function populateTable(arr) {
  arr.forEach((el, index) => {
    let tr = document.createElement("tr")
      , input = document.createElement("input")
      , td = []
    input.type = "checkbox"
    input.name = el.id
    for (let i = 0; i < 5; i++) td[i] = document.createElement("td")
    td[0].appendChild(input)
    td[1].innerHTML = el.nickname
    td[2].innerHTML = el.name
    td[3].innerHTML = el.surname
    td[4].innerHTML = el.email
    for (let i in td) tr.appendChild(td[i])
    tbody.appendChild(tr)
  })
}

function displayFirstStep() {
  firstStep.style.display = 'flex'
  secondStep.style.display = 'none'
}

function displaySecondStep() {
  firstStep.style.display = 'none'
  secondStep.style.display = 'block'
}

function nextStep() {
  emails = []
  let tr = tbody.children
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].children
      , input = td[0].firstElementChild.checked
      , email = td[4].innerHTML
    if (input) emails.push(email)
  }  
  displaySecondStep()
}

function clearSecondStep() {
  let inputs = document.querySelectorAll("#second-step input")
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = 0
  }
}

function submitSecondStep() {
  let inputs = document.querySelectorAll("#second-step input")
  let task = {
    novice: {},
    apprentice: {},
    adept: {},
    expert: {},
    master: {},
  }
  for (let i = 1; i <= inputs.length; i++) {
    let value = inputs[i-1].value
    switch (i) {
      case 1:  task.novice.treble = value
      case 2:  task.novice.bass = value
      case 3:  task.novice.grandStaff = value
      case 4:  task.novice.alto = value
      case 5:  task.apprentice.treble = value
      case 6:  task.apprentice.bass = value
      case 7:  task.apprentice.grandStaff = value
      case 8:  task.apprentice.alto = value
      case 9:  task.adept.treble = value
      case 10: task.adept.bass  = value
      case 11: task.adept.grandStaff  = value
      case 12: task.adept.alto  = value
      case 13: task.expert.treble  = value
      case 14: task.expert.bass  = value
      case 15: task.expert.grandStaff  = value
      case 16: task.expert.alto  = value
      case 17: task.master.treble  = value
      case 18: task.master.bass  = value
      case 19: task.master.grandStaff  = value
      case 20: task.master.alto  = value
    }
  }

  let body = { emails, task }
  let res = httpRequest(apiUrl, "send_emails", JSON.stringify(body) )
  if (res) {
    console.log(res)
    alert("You've just sent emails to students!")
  }

}

function searchStudent() {
  let { value } = searchbox
  let tr = tbody.children
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].children
      , hideTr = true
    for (let k = 1; k < td.length; k++) {
      let content = td[k].innerHTML
      if (content.match(value)) {
        hideTr = false
      }
    }

    if (hideTr) tr[i].style.display = "none"
    else tr[i].style.display = "table-row"
  }



  if (value == "") {

  }
  else {

  }

}

function httpRequest(url, apiFunction, body = null) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open( "POST", url, false ) // false for synchronous request
  xmlHttp.setRequestHeader('Content-Type', 'text/plain')
  xmlHttp.setRequestHeader('API-Function', apiFunction)
  if (body) xmlHttp.send(body)
  else xmlHttp.send()
  return xmlHttp.responseText
}

