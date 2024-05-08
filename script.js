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
const level1 = game.querySelector('#level1')
const level2 = game.querySelector('#level2')
const level3 = game.querySelector('#level3')
const button = body.querySelector('#darkMode')
const ul = body.querySelector('ul')
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
let isPlayed = true

let isWin = false //boolean to check if the player win and by defualt its false

const car = {
  color: ['red', 'green', 'purple', 'blue'],
  imgSource: './materials/name.png',
  Cars: []
}
let carM
/* functions */
const generateRandomCars = () => {
  let random = Math.floor(Math.random() * car.color.length) % car.color.length
  let carImage = (car.imgSource = `./materials/images/${car.color[random]}.png`)
  console.log(carImage)
  return carImage
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
}
const deaths = () => {
  currentLocation.innerHTML = ''
  currentLocation = game.querySelector('#r1C1')
  currentLocation.innerHTML =
    '<img src="./materials/images/Duck.jpg" alt="Duck" />'
  car.Cars.forEach((a) => a.remove())
  car.Cars = []
  document.querySelector('#death').innerText = death
  xMovement = 1
  yMovement = 1
  playLevel1()
}
const isDead = (count) => {
  if (currentLocation.childElementCount === count) {
    death++
    return true
  }
  return false
}
const playLevel1 = () => {
  for (let i = 2; i < 7; i++) {
    let img = document.createElement('img')
    img.src = generateRandomCars()
    let theCar = game.querySelector(`#r${i}C8 `).appendChild(img)
    car.Cars.push(theCar)
  }

  carM = setInterval(() => {
    for (let i = 0; i < car.Cars.length; i++) {
      let indx = car.Cars[i].parentNode.id[1]
      let indx2 = car.Cars[i].parentNode.id[3]
      if (indx2 == 1) indx2 = 9
      let img = car.Cars[i]
      car.Cars[i].remove()
      let theCar = game.querySelector(`#r${indx}C${--indx2} `).appendChild(img)
      car.Cars[i] = theCar
    }
    if (isDead(2)) {
      deaths()
      clearInterval(carM)
    }
  }, 1500)
}

const playLevel2 = () => {}
const playLevel3 = () => {}
//dark  mode
const duckMovement = (direction) => {
  let up = direction === arrowUp || direction === 'w' || direction === 'W'
  let right = direction === arrowRight || direction === 'd' || direction === 'D'
  let down = direction === arrowDown || direction === 's' || direction === 'S'
  let left = direction === arrowLeft || direction === 'a' || direction === 'A'
  /*   console.log(`key ==> ${direction}`)
   */ if (up) {
    if (yMovement === 7) return

    yMovement++
  } else if (right) {
    if (xMovement === 8) return

    xMovement++
  } else if (down) {
    if (yMovement === 1) return

    yMovement--
  } else if (left) {
    if (xMovement === 1) return
    xMovement--
  } else return

  currentLocation.innerHTML = ''
  if (yMovement === 7) {
    isWin = true
    currentLocation = ocean.querySelector(` #r${yMovement}C${xMovement}`)
    winnerScope(isWin)
  } else {
    currentLocation = game.querySelector(` #r${yMovement}C${xMovement}`)
    /*     console.log(currentLocation)
     */
  }
  if (isDead(1)) {
    clearInterval(carM)
    deaths()
  }
  currentLocation.innerHTML =
    '<img src="./materials/images/Duck.jpg" alt="Duck" />'
} //this function will track the movement of the duck by the keyvored
/* eventLisnter */

document.addEventListener('keydown', (direction) => {
  duckMovement(direction.key)
})

button.addEventListener('click', () => {
  dark()
}) //event listner to handle dark mode

level1.addEventListener('click', () => {
  if (isPlayed) {
    playLevel1()
    isPlayed = false
  }
})
