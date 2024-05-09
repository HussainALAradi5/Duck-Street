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
const secondHTML = game.querySelector('#secondHTML')

console.log(secondHTML)
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
const duck = body.querySelector('#duck')
let isWin = false //boolean to check if the player win and by defualt its false
let playerLevel = 1
const car = {
  color: ['red', 'green', 'purple', 'blue'],
  imgSource: './materials/name.png',
  Cars: []
} //car object holds car colors+car image source+an array for Cars
let carM
let secondPage = 0
/* functions */
const generateRandomCars = () => {
  let random = Math.floor(Math.random() * car.color.length) % car.color.length
  let carImage = (car.imgSource = `./materials/images/${car.color[random]}.png`)
  return carImage
}

const winnerScope = () => {
  winner++
  yMovement = 1
  xMovement = 1
  currentLocation.innerHTML = ''
  currentLocation = game.querySelector(` #r${yMovement}C${xMovement}`)
  currentLocation.innerHTML =
    '<img id = "duck" src="./materials/images/Duck.png" alt="Duck" />'
  winningScore.innerHTML = `${winner}`
  return true
}

const clear = () => {
  clearInterval(carM)
  currentLocation.innerHTML = ''
  currentLocation = game.querySelector('#r1C1')
  currentLocation.innerHTML =
    '<img id="duck" src="./materials/images/Duck.png" alt="Duck" />'
  car.Cars.forEach((a) => a.remove())
  car.Cars = []
  document.querySelector('#death').innerText = death
  xMovement = 1
  yMovement = 1
  startGame(playerLevel)
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
      clearInterval(carM)
      clear()
    }
  }, 1500)
}

const playLevel2 = () => {
  for (let i = 2; i < 7; i++) {
    let img = document.createElement('img')
    img.src = generateRandomCars()
    let rL = i % 2 == 0 ? 8 : 1
    let theCar = game.querySelector(`#r${i}C${rL} `).appendChild(img)
    car.Cars.push(theCar)
  }

  carM = setInterval(() => {
    for (let i = 0; i < car.Cars.length; i++) {
      let indx = car.Cars[i].parentNode.id[1]
      let indx2 = car.Cars[i].parentNode.id[3]
      if (i % 2 == 1) {
        if (indx2 == 8) indx2 = 1
        indx2++
      } else {
        if (indx2 == 1) indx2 = 8
        indx2--
      }
      let img = car.Cars[i]
      car.Cars[i].remove()
      let theCar = game.querySelector(`#r${indx}C${indx2} `).appendChild(img)
      car.Cars[i] = theCar
    }
    if (isDead(2)) {
      clearInterval(carM)
      clear()
    }
  }, 1500)
}
const playLevel3 = () => {
  for (let i = 2; i < 7; i++) {
    let img = document.createElement('img')
    img.src = generateRandomCars()
    let rL = i % 2 == 0 ? 8 : 1
    let theCar = game.querySelector(`#r${i}C${rL} `).appendChild(img)
    car.Cars.push(theCar)
  }

  carM = setInterval(() => {
    for (let i = 0; i < car.Cars.length; i++) {
      let indx = car.Cars[i].parentNode.id[1]
      let indx2 = car.Cars[i].parentNode.id[3]
      if (i % 2 == 1) {
        if (indx2 == 8) indx2 = 1
        indx2++
      } else {
        if (indx2 == 1) indx2 = 8
        indx2--
      }
      let img = car.Cars[i]
      car.Cars[i].remove()
      let theCar = game.querySelector(`#r${indx}C${indx2} `).appendChild(img)
      car.Cars[i] = theCar
    }
    if (isDead(2)) {
      clearInterval(carM)
      clear()
    }
  }, 1250)
}
//dark  mode
const duckMovement = (direction) => {
  let up = direction === arrowUp || direction === 'w' || direction === 'W'
  let right = direction === arrowRight || direction === 'd' || direction === 'D'
  let down = direction === arrowDown || direction === 's' || direction === 'S'
  let left = direction === arrowLeft || direction === 'a' || direction === 'A'
  if (up) {
    if (yMovement === 6) {
      clearInterval(carM)
      winnerScope()
      return
    }

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

  currentLocation = game.querySelector(` #r${yMovement}C${xMovement}`)

  if (isDead(1)) {
    clearInterval(carM)
    clear()
  }
  currentLocation.innerHTML =
    '<img id="duck" src="./materials/images/Duck.png" alt="Duck" />'
}
const dark = () => {
  if (black) {
    body.style.backgroundColor = 'black'
    black = false
    ul.style.color = 'whiteSmoke'
    button.style.backgroundColor = 'white'
    button.style.color = 'black'
    duck.style.boxShadow = '0 0 50px yellow'
  } else {
    body.style.backgroundColor = 'white'
    black = true
    ul.style.color = 'black'
    button.style.backgroundColor = 'black'
    button.style.color = 'white'
    duck.style.boxShadow = 'none'
  }
}

const startGame = (selectedLevel) => {
  if (selectedLevel === 1) playLevel1()
  else if (selectedLevel === 2) playLevel2()
  else playLevel3()
}
//this function will track the movement of the duck by the keyvored
/* eventLisnter */

document.addEventListener('keydown', (direction) => {
  duckMovement(direction.key)
})

button.addEventListener('click', () => {
  dark()
}) //event listner to handle dark mode

level1.addEventListener('click', () => {
  playerLevel = 1
  clear()
})
level2.addEventListener('click', () => {
  playerLevel = 2
  clear()
})
level3.addEventListener('click', () => {
  playerLevel = 3
  clear()
})
secondHTML.addEventListener('click', () => {
  document.location.href = './second.html'
})

startGame(1)
