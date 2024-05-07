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
/* eventLisnter */
