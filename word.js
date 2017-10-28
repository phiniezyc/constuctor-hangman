var collectionOfWords = {
    words: ["beyonce", "prince", "sting", "madonna", "drake", "elvis", "elton", "janis"],
};

var wordForUserToGuess = collectionOfWords.words[Math.floor(Math.random() * collectionOfWords.words.length)];
    
var wordSplitIntoArray = wordForUserToGuess.split("");
//console.log("The word to guess is: " + wordSplitIntoArray);

var letterSpaces = [];

//===============================Functions===========================
function showLetterSpaces() {
    for (var i = 0; i < wordSplitIntoArray.length; i++) {
        letterSpaces.push("_");
    }
}
 showLetterSpaces();
 //console.log(letterSpaces);

function joinedLetters() {
    console.log(letterSpaces.join(" "));  
}





module.exports = {
    collectionOfWords: collectionOfWords,
    joinedLetters: joinedLetters,
    wordSplitIntoArray: wordSplitIntoArray,
    wordForUserToGuess: wordForUserToGuess,
    letterSpaces: letterSpaces,
    
};

