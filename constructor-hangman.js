var wordsToGuess = require ("./wordsToGuess.js");
var inquirer = require ("inquirer");

//Need words to pick from 

//Need to pick a word to choose and show it to user
console.log("Bacon " + "Test letter");

//Need to prompt user to pick a word 
function startRound() {
inquirer.prompt([
    {
        type: 'input',
        name: 'guess',
        message: 'Guess A letter!'

    }
]).then(function (answer) {
    console.log("here should check to see if letter in word")
    //Check if letter guessed in word: 
    //if Y show letter and guess again
    //if ends game then end round...

    // answer.guess is the letter you guess:
    console.log("This is your letter: " + answer.guess);
    //startRound();
});
}

startRound();

//Need to get letters that user types in 

//Need to check to see if letter is in word? 

//If user letter pick is in word THEN show letter correct 
    //If got all letters, end round and restart game

//If user letter NOT in word, then decrease guesses left
    //If out of guesses end round restart game 






