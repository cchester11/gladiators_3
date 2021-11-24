// create a new version in which the player is prompted after each hit to run or flee
// if players flees he loses attack strength
// if player wins he gians attack strength
const inquirer = require('inquirer')
const enemyNameFunc = require('./utils/enemynameFunc')
const fight = require('./utils/fight')

// player 
let Freyja = 'Freyja'
let playerHealth = 90
// enemy 
let enemyNames = []


enemyNameFunc(enemyNames)

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
                        if(i === 0) {
                            let nextFighter = enemyNames[i]
                            fight(nextFighter, playerHealth)
                        }
                        if (i > 0) {
                            playerHealth += 10

                            console.log(`Your champion ${Freyja} has ${playerHealth} health points left! She will not be slain!`)

                            let nextFighter = enemyNames[i]

                            fight(nextFighter, playerHealth)
                        } 
                    } else {
                        console.log('Your champion has been defeated')

                        endGame()
                    }
                }
            }
        })
}

startGame()