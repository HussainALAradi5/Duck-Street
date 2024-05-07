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
/* functions */
/* eventLisnter */
