var word = require("./word");
var inquirer = require("inquirer");
var restartGame = require("./restartGame");


var rightLetters = [];
var wrongLetters = [];
var guessesLeft = 10;

//Need to prompt user to pick a word 
function askUserToGuessLetter() {
    console.log("Guess a famous musician's name: ");
    inquirer.prompt([{
        type: 'input',
        name: 'guess',
        message: 'Guess A letter!'
    }]).then(function (answer) {
        //console.log("Guess a famous musician's name: ");
        if (word.wordForUserToGuess.indexOf(answer.guess) > -1) {

            rightLetters.push(answer.guess);
            var replaceLetter = word.wordForUserToGuess.indexOf(answer.guess);
            //console.log(replaceLetter);

            //replaces "_" w/ correct letter guessed by user
            word.collectionOfWords.letterSpaces.splice(replaceLetter, 1, answer.guess);
            console.log(word.collectionOfWords.letterSpaces);

        } else {
            //console.log("nope");
            wrongLetters.push(answer.guess);
            console.log("Incorrect Letters: " + wrongLetters);
        }
        checkGameStatus();
        subtractFromGuessTotal();

    });
}

function checkGameStatus() {
    if (word.collectionOfWords.letterSpaces.join("") === word.wordForUserToGuess) {
        console.log("You've got it!");
    } else {
        askUserToGuessLetter();
    }
}

function subtractFromGuessTotal() {
    guessesLeft--;
    console.log("You have " + guessesLeft + " left!");
    if (guessesLeft === 0) {
        console.log("game over!");
        restartGame.restartGame();
    }

}




module.exports = {
    askUserToGuessLetter: askUserToGuessLetter,
    checkGameStatus: checkGameStatus,
    subtractFromGuessTotal: subtractFromGuessTotal,


};