/* global variabls */
const body = document.body
const game = document.querySelector('.game')
const rows = game.children
const ocean = game.querySelector('#ocean')
const firstRow = body.querySelector('#firstRow')
const secondRow = body.querySelector('#secondRow')
const thirdRow = body.querySelector('#thirdRow')
const fourthRow = body.querySelector('#fourthRow')
const fifthRow = body.querySelector('#fifthRow')
let currentLocation = firstRow.querySelector('#r1C1')
const arrowUp = 'ArrowUp'
const arrowDown = 'ArrowDown'
const arrowRight = 'ArrowRight'
const arrowLeft = 'ArrowLeft'
let winningScore = body.querySelector('#additions').querySelector('#win')
let xMovement = 1 //left and right movement
let yMovement = 1 //up and down movement
let winner = 0
let death = 0
let black = true
let playAgain = 1
const button = body.querySelector('#darkMode')
const ul = body.querySelector('ul')
let isWin = false //boolean to check if the player win and by defualt its false

const car = {
  color: ['red', 'green', 'purple', 'blue'],
  imgSource: './materials/name.png'
}
/* functions */
const generateRandomCars = () => {
  let random = Math.floor(Math.random() * car.color.length) % car.color.length
  return random
}
const winnerScope = (isWin) => {
  if (isWin) winner++
  yMovement = 1
  xMovement = 1
  currentLocation = game.querySelector(` #r${yMovement}C${xMovement}`)
  console.log(currentLocation)
  winningScore.innerHTML = `${winner}`
  return true
}
const dark = () => {
  if (black) {
    body.style.backgroundColor = 'black'
    black = false
    ul.style.color = 'whiteSmoke'
    button.style.backgroundColor = 'white'
    button.style.color = 'black'
  } else {
    body.style.backgroundColor = 'white'
    black = true
    ul.style.color = 'black'
    button.style.backgroundColor = 'black'
    button.style.color = 'white'
  }
} //dark  mode
const duckMovement = (direction) => {
  let up = direction === arrowUp || direction === 'w' || direction === 'W'
  let right = direction === arrowRight || direction === 'd' || direction === 'D'
  let down = direction === arrowDown || direction === 's' || direction === 'S'
  let left = direction === arrowLeft || direction === 'a' || direction === 'A'
  console.log(`key ==> ${direction}`)
  if (up) {
    if (yMovement === 6) return

    yMovement++
  } else if (right) {
    if (xMovement === 5) return

    xMovement++
  } else if (down) {
    if (yMovement === 1) return

    yMovement--
  } else if (left) {
    if (xMovement === 1) return
    xMovement--
  } else return

  currentLocation.innerHTML = ''
  if (yMovement === 6) {
    isWin = true
    currentLocation = ocean.querySelector(` #r${yMovement}C${xMovement}`)
    winnerScope(isWin)
  } else {
    currentLocation = game.querySelector(` #r${yMovement}C${xMovement}`)
  }
  currentLocation.innerHTML =
    '<img src="./materials/images/Duck.jpg" alt="Duck" />'
} //this function will track the movement of the duck by the keyvored
/* eventLisnter */
