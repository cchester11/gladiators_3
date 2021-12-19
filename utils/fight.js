const inquirer = require('inquirer')

function fight(fighter, pHealth) {
    const adj1Array = ['hefty', 'furious', 'fiery', 'reddened']
    const adj1 = adj1Array[Math.floor(Math.random() * adj1Array.length)]
    const verbArray = ['leaped', 'twisted', 'formed']
    const verb = verbArray[Math.floor(Math.random() * verbArray.length)]
    const prepArray = ['beneath', 'under', 'within']
    const preposition = prepArray[Math.floor(Math.random() * prepArray.length)]
    const nounArray = ['bush', 'maple tree', 'foggy mist', 'black bog']
    const noun = nounArray[Math.floor(Math.random() * nounArray.length)]

    const playerAttackBonus = [1, 2, 3, 4, 5]
    let playerAttack = 5 + Math.floor(Math.random() * playerAttackBonus.length)
    let eHealth = 59 + Math.floor(Math.random() + 5)
    let enemyAttack = 7


    console.log(`${fighter}! A ${adj1} opponent ${verb} out from ${preposition} a ${noun}`)

    enemyHealth = 59 + Math.floor(Math.random() + 5)

    inquirer.prompt({
        type: 'confirm',
        name: 'attack_flee',
        message: 'Will you attack the enemy or flee the scene?'
    })
        .then(function ({ attack_flee }) {
                if (attack_flee == true) {
                    while (pHealth > 0 && eHealth > 0) {
                        eHealth = eHealth - playerAttack

                        console.log(`${fighter} took ${playerAttack} points of damage! You slash at him with your sword!`)

                        if (eHealth <= 0) {
                            console.log(`The ${adj1} ${fighter} has been defeated!`)
                        }

                        pHealth = pHealth - enemyAttack

                        console.log(`You took 7 points of damage! The enemies consistency is worrying.`)
                        console.log(pHealth)
                        
                        if (pHealth <= 0) {
                            console.log('Your champion Freyja ascends to Valhalla where she awaits an eternity of glorious battles and infitely full jugs of wine')
                            break;
                        }
                    }
                }
            })
}

module.exports = fight;