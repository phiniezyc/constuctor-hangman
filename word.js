var collectionOfWords = {
    words: ["beyonce", "prince", "sting", "duke", "drake", "elvis", "elton", "janis", "tupac",],
    letterSpaces: [],
    showLetterSpaces: function() {
        for (var i = 0; i < wordSplitIntoArray.length; i++) {
            collectionOfWords.letterSpaces.push("_");
        }
    }
};

var wordForUserToGuess = collectionOfWords.words[Math.floor(Math.random() * collectionOfWords.words.length)];

var wordSplitIntoArray = wordForUserToGuess.split("");
//console.log("The word to guess is: " + wordSplitIntoArray);

//var letterSpaces = [];

//===============================Functions===========================
// function showLetterSpaces() {
//     for (var i = 0; i < wordSplitIntoArray.length; i++) {
//         collectionOfWords.letterSpaces.push("_");
//     }
// }
collectionOfWords.showLetterSpaces();
//console.log(letterSpaces);

function joinedLetters() {
    console.log(collectionOfWords.letterSpaces.join(" "));
}





module.exports = {
    collectionOfWords: collectionOfWords,
    joinedLetters: joinedLetters,
    wordSplitIntoArray: wordSplitIntoArray,
    wordForUserToGuess: wordForUserToGuess,
    letterSpaces: collectionOfWords.letterSpaces,

};