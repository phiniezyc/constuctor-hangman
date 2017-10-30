var collectionOfWords = {
    words: ["beyonce", "prince", "sting", "duke", "drake", "elvis", "elton", "janis", "tupac", ],
    letterSpaces: [],
    showLetterSpaces: function () {
        for (var i = 0; i < wordSplitIntoArray.length; i++) {
            collectionOfWords.letterSpaces.push("_");
        }
    }
};

var wordForUserToGuess = collectionOfWords.words[Math.floor(Math.random() * collectionOfWords.words.length)];

var wordSplitIntoArray = wordForUserToGuess.split("");
//console.log("The word to guess is: " + wordSplitIntoArray);

collectionOfWords.showLetterSpaces();
//console.log(letterSpaces);

function joinedLetters() {
    console.log(collectionOfWords.letterSpaces.join(" "));
}

// I know how to create constructor functions and prototypes, but I'm failing to see how it's useful in this example?
// Constructor Function: 
//     function Word(randomWord) {
//         this.randomWord = randomWord;
// }
// //Then add prototype:
//     Word.prototype.wordSplitIntoArray = function() {
//         wordForUserToGuess.split("");
//     };




module.exports = {
    collectionOfWords: collectionOfWords,
    joinedLetters: joinedLetters,
    wordSplitIntoArray: wordSplitIntoArray,
    wordForUserToGuess: wordForUserToGuess,
    letterSpaces: collectionOfWords.letterSpaces,

};