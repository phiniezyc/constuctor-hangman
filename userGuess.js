var wordsToGuess = require ("./wordsToGuess");
var word = require ("./word");
var inquirer = require ("inquirer");



var rightLetters = [];
var wrongLetters = [];



//Need to prompt user to pick a word 
function askUserToGuessLetter() {
inquirer.prompt([
    {
        type: 'input',
        name: 'guess',
        message: 'Guess A letter!'
    }
]).then(function (answer) {
    console.log("here should check to see if letter in word");
    if (word.wordForUserToGuess.indexOf(answer.guess) > -1) {
        
        rightLetters.push(answer.guess);
        var replaceLetter = word.wordForUserToGuess.indexOf(answer.guess);
        console.log(replaceLetter);

        //replaces "_" w/ correct letter guessed by user
        word.letterSpaces.splice(replaceLetter, 1, answer.guess);
        console.log(word.letterSpaces);
        

        console.log("yep!");
        console.log(rightLetters);
        
    } else {
        console.log("nope");
        wrongLetters.push(answer.guess);
        console.log(wrongLetters);  
    }
    checkGameStatus();
});
}

function checkGameStatus() {
    if (word.letterSpaces.join("") === word.wordForUserToGuess ) {
        console.log("You've got it!");
    } else {
        askUserToGuessLetter();
    }
}




module.exports = {
    askUserToGuessLetter: askUserToGuessLetter,
    checkGameStatus: checkGameStatus,
    

};