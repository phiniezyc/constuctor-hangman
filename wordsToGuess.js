var wordsToGuess = {
    words: ["beyonce", "prince", "sting", "madonna", "drake", "elvis", "elton", "janis"]

};



var wordForUserToGuess = wordsToGuess.words[Math.floor(Math.random() * wordsToGuess.words.length)];
console.log(wordForUserToGuess);

var wordSplitIntoArray = wordForUserToGuess.split("");
console.log(wordSplitIntoArray);

var letterSpaces = [];
function showLetterSpaces(word) {
    for (var i = 0; i < wordSplitIntoArray.length; i++) {
        letterSpaces.push("_");
    }

}
showLetterSpaces();

//show the letter spaces w/ a space in between each space
console.log(letterSpaces.join(" "));


//console.log(wordsToGuess.words);











module.export = {
    wordsToGuess: wordsToGuess
};