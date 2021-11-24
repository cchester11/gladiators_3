const inquirer = require('inquirer')

const endGame = (startFunction) => {
    inquirer.prompt({
        type: 'confirm',
        name: 'play_again',
        message: "Would you like to play again?"
    })
    .then(answer => {
        if(answer == true) {
            startFunction
        } else {
            console.log('Scared or what?')
        }
    })
}

module.exports = endGame()