var word = require ("./word");
var userGuess = require ("./userGuess");
var inquirer = require ("inquirer");





//======App Mechanics====================


//Displays word to guess as spaces:
word.joinedLetters();

userGuess.askUserToGuessLetter();

