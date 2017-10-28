var wordsToGuess = require ("./wordsToGuess");
var word = require ("./word");
var inquirer = require ("inquirer");

//Need words to pick from 

var rightLetters = [];
var wrongLetters = [];
//Need to pick a word to choose and show it to user


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
    if (word.wordSplitIntoArray.indexOf(answer.guess) > -1) {
        rightLetters.push(answer.guess);
        console.log("yep!");
        console.log(rightLetters);
    } else {
        console.log("nope");
        wrongLetters.push(answer.guess);
        console.log(wrongLetters);
    }
});
}

//askUserToGuessLetter();

//Need to get letters that user types in 

//Need to check to see if letter is in word? 
    //if answer.guess indexOf() === correctLetter ... push to rightWordsArray... if wrong push to wrongWordsArray...
//If user letter pick is in word THEN show letter correct 
    //If got all letters, end round and restart game

//If user letter NOT in word, then decrease guesses left
    //If out of guesses end round restart game 


// Not currently using this function:
function checkLetters() {
    if (word.wordSplitIntoArray.indexOf(answer.guess) > -1) {
        rightLetters.push(answer.guess);
        console.log("yep!");
        console.log(rightLetters);
    } else {
        console.log("nope");
    }

}


module.exports = {
    askUserToGuessLetter: askUserToGuessLetter,

};