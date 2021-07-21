// create a start function
// the start function will start the game
// it will be passed fight function
// the fight function will be passed a boost function between rounds of fight
// the start function also needs to be passed an endGame function at the end of start

// set up characters as global variables
// set up enemies as global variables

// make an enemy health function globally that generates a random number
// make a player health function that randomly generates a number as well
const inquirer = require('inquirer')


let generateEnemyHealth = () => {
    let value = Math.floor(Math.random() * 10) + 40

    return value
}

let Freyja = 'Freyja'
let playerHealth = 90
let playerAttack = 10
let playerPoints = 50

const enemyNames = ['Hal', 'Brook', 'TikTul']
let enemyHealth = generateEnemyHealth()
let enemyAttack = 9

function startGame() {
    //count through enemy names and run fight function through each loop
    for (let i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            console.log(`Round ${i + 1}`)

            let nextFighter = enemyNames[i]
            enemyHealth = generateEnemyHealth()

            fight(nextFighter)
        } else {
            console.log('The game is over')
            break;
        }
    }

    endGame()
}

function endGame() {
    if (playerHealth > 0) {
        console.log('Freyja has beaten all champions')
    } else {
        console.log('Freyja was defeated in battle')
    }

    inquirer.prompt({
        type: 'text',
        name: 'replay',
        message: 'Reply 1 to run again and 0 to quit.'
    })
        .then(({ replay }) => {
            if (replay == true) {
                startGame()
            }
        })
}

function fight(fighter) {
    while (playerHealth > 0 && enemyHealth > 0) {
        enemyHealth = enemyHealth - Math.floor(Math.random() * playerAttack)

        console.log(`${Freyja} attacked ${fighter}. ${fighter} has ${enemyHealth}`)

        if (enemyHealth <= 0) {
            console.log(`${fighter} is defeated`)
            playerPoints = playerPoints + 20
            playerHealth = playerHealth + 20
        }

        playerHealth = playerHealth - Math.floor(Math.random() * enemyAttack)

        console.log(`${fighter} attacked ${Freyja}. ${Freyja} has ${playerHealth}`)

        if (playerHealth <= 0) {
            console.log('Freyja has been defeated')
            break;
        } else {
            console.log(`Freyja can still compete with ${playerHealth} left!`)
        }
    }
}

startGame()