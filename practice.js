// create a new version in which the player is prompted after each hit to run or flee
// if players flees he loses attack strength
// if player wins he gians attack strength
const inquirer = require('inquirer')

const consArr = ['b','c','d', 'f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
const vowArr = ['a', 'e', 'i', 'o', 'u', 'y']

const vowArrMath = [
    Math.floor(Math.random() * 10) ,  Math.floor(Math.random() + 15) , Math.floor(Math.random() + 17) , Math.floor(Math.random() * 5)
]

const consArrMath = [
    Math.floor(Math.random() * 10) , Math.floor(Math.random() + 15) , Math.floor(Math.random() + 17) , Math.floor(Math.random() * 5)
]

let Freyja = 'Freyja'
let playerHealth = 90
let playerAttack = 10
let playerPoints = 50

let enemyNames = []
let enemyName = ''

const enemyNameFunc = function () {
    for(let i = 0; i < 5; i ++) {
        for(let i = 0; i < 5; i ++) {

            if(i === 0 || i === 2 || i === 4) {
                enemyName += vowArr[Math.floor(Math.random() * vowArrMath.length)]
            }
    
            if(i === 1 || i === 3) {
                enemyName += consArr[Math.floor(Math.random() * consArrMath.length)]
            }
            
        }

        enemyNames.push(enemyName)
        enemyName = ''
    }

    console.log(enemyNames)
}

enemyNameFunc()

const startGame = () => {
    inquirer.prompt({
        type: 'confirm',
        name: 'start_game',
        message: 'Would you like to play gladiators',
    })
    .then(({ start_game }) => {
        if(start_game) {
            for(let i = 0; i < enemyNames; i ++) {
                if(playerHealth > 0) {
                    console.log(`Your champion ${Freyja} has ${playerHealth} health points left! She will not be slain!`)

                    let nextFighter = enemyNames[i]

                    playerAttack += 2

                    fight(nextFighter)
                } else {
                    console.log('Your champion has been defeated')

                    endGame()
                }
            }
        }
    })
}

startGame()