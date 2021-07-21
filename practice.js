const inquirer = require('inquirer')

const fighters = ['Gul', 'Brok', 'Tik']
let fHealth = 50
let fAttack = 10

let hHealth = 90
let hAttack = 12

function startGame () {
    hHealth = 90
    for (let i = 0; i < fighters.length; i ++) {
        if(hHealth > 0) {
            let nextUp = fighters[i]
            fHealth = 50
            fight(nextUp)
        } else {
            break;
        }
    }
    endGame()
}

function fight (fighter) {
    while(hHealth > 0 && fHealth > 0) {
        hHealth = hHealth - fAttack
        console.log(`Freyja health: ${hHealth}`)
        fHealth = fHealth - hAttack
        console.log(`${fighter} health: ${fHealth}`)
        if(fHealth < 0) {
            console.log(`${fighter} defeated`)
        }
    }
}

function endGame () {
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