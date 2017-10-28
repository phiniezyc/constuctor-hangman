var inquirer = require("inquirer");
var userGuess = require("./userGuess");



function restartGame() {
    console.log("Guess a famous musician's name: ");
    inquirer.prompt([{
        type: 'input',
        name: 'restart',
        message: 'Would you like to play again (y/n)?'
    }]).then(function (answer) {
        if (answer.restart === "y") {
            userGuess.askUserToGuessLetter();


        } else {
            console.log("Thanks for playing! Come back soon!");
        }

    });
}




module.exports = {
    restartGame: restartGame,

};