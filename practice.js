// convert to a game in which before each attack the player is asked to make a choice to continue or flee to next opponent. if flees than loses attack strength but if wins gains attack strength

const inquirer = require('inquirer')

const fighters = ['Gul', 'Brok', 'Tik']
let fHealth = 50
let fAttack = 10

let hHealth = 90
let hAttack = 12

function startGame() {
    for (let i = 0; i < fighters.length; i ++) {
        if(hHealth > 0) {
            //notice starting a new game wont do anything unless we reset the health of the enemy each time
            fHealth = 50
            hHealth = hHealth + 10
            let nextUp = fighters[i]
            fight(nextUp)
            console.log(`Round ${i + 1}`)
        }
    }
    endGame()
}

function fight(fighter) {
    while(hHealth > 0 && fHealth > 0) {
        hHealth = hHealth - fAttack
        console.log(`Freja health: ${hHealth}`)
        fHealth = fHealth - hAttack
        console.log(`${fighter} health: ${fHealth}`)
        if(hHealth <= 0) {
            break;
        }
    }
}

function endGame() {
    inquirer.prompt({
        type: 'text',
        name: 'replay',
        message: 'Reply 1 to run again or 0 to quit'
    })
    .then(({replay}) => {
        if(replay == true) {
            startGame()
        }
    })
}

startGame()