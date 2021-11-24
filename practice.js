// create a new version in which the player is prompted after each hit to run or flee
// if players flees he loses attack strength
// if player wins he gians attack strength
const inquirer = require('inquirer')
// const enemynameFunc = require('./utils/enemynameFunc')

// for name generation
const consArr = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
const vowArr = ['a', 'e', 'i', 'o', 'u', 'y']
const vowArrMath = [
    Math.floor(Math.random() * 10), Math.floor(Math.random() + 15), Math.floor(Math.random() + 17), Math.floor(Math.random() * 5)
]
const consArrMath = [
    Math.floor(Math.random() * 10), Math.floor(Math.random() + 15), Math.floor(Math.random() + 17), Math.floor(Math.random() * 5)
]

const adj1Array = ['hefty', 'furious', 'fiery', 'reddened']
const adj1 = 1 + Math.floor(Math.random() * adj1Array.length)

const verbArray = ['leaped', 'twisted', 'formed']
const verb = 1 + Math.floor(Math.random() * verbArray.length)

const prepArray = ['beneath', 'under', 'within']
const preposition = 1 + Math.floor(Math.random() * prepArray.length)

const nounArray = ['bush', 'maple tree', 'foggy mist', 'black bog']
const noun = 1 + Math.floor(Math.random() * nounArray.length)

// player 
let Freyja = 'Freyja'
let playerHealth = 90
const playerAttackBonus = [1, 2, 3, 4, 5]
let playerAttack = 5 + Math.floor(Math.random() * playerAttackBonus.length)

// enemy 
let enemyNames = []
let enemyName = ''
let enemyHealth = 40
let enemyAttack = 7


const enemyNameFunc = function () {
    for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 5; i++) {

            if (i === 0 || i === 2 || i === 4) {
                enemyName += vowArr[Math.floor(Math.random() * vowArrMath.length)]
            }

            if (i === 1 || i === 3) {
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
            if (start_game == true) {
                for (let i = 0; i < enemyNames.length; i++) {
                    if (playerHealth > 0) {
                        if (i > 0) {
                            playerHealth += 20
                            playerAttack += 1
                            console.log(`Your champion ${Freyja} has ${playerHealth} health points left! She will not be slain!`)
                        }

                        let nextFighter = enemyNames[i]

                        fight(nextFighter)
                    } else {
                        console.log('Your champion has been defeated')

                        endGame()
                    }
                }
            }
        })
}

const fight = (fighter) => {
    console.log(`${fighter}, a ${adj1} opponent, ${verb} out from ${preposition} a ${noun}`)

    inquirer.prompt({
        type: 'input',
        name: 'attack_flee',
        message: 'Will you attack the enemy or flee the scene? Reply "attack" to attack or "flee" to flee.'
    })
        .then(({ attack_flee }) => {
            if (attack_flee === 'attack') {
                while (playerHealth > 0 || enemyHealth > 0) {
                    enemyHealth = enemyHealth - playerAttack

                    console.log(`${fighter} took ${playerAttack} points of damage!`)

                    if(enemyHealth <= 0) {
                        console.log(`The ${adj1} ${fighter} has been defeated!`)
                    }

                    playerHealth = playerHealth - enemyAttack

                    console.log(`You took 7 points of damage! The enemies consistency is worrying.`)

                    if(playerHealth <= 0) {
                        console.log('Your champion Freyja ascends to Valhalla where she awaits an eternity of glorious battles and infitely full jugs of wine')
                        break;
                    }
                }
            }
        })
}

startGame()