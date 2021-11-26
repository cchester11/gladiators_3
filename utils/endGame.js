const inquirer = require('inquirer')

function endGame (start) {
    inquirer.prompt({
        type: 'confirm',
        name: 'play_again',
        message: "Would you like to play again?"
    })
    .then(answer => {
        if(answer == true) {
            start
        } else {
            console.log('Scared or what?')
        }
    })
}

module.exports = endGame;