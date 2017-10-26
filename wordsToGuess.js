var wordsToGuess = {
    words: ["beyonce", "prince", "sting", "madonna", "drake", "elvis", "elton", "janis"]

};



var wordForUserToGuess = wordsToGuess.words[Math.floor(Math.random() * wordsToGuess.words.length)];
console.log(wordForUserToGuess);

var wordSplitIntoArray = wordForUserToGuess.split("");
console.log(wordSplitIntoArray);

// function showLetterSpaces(word) {
//     for (var i = 0; i < word.length; i++) {
//         //[i]+ " ";

//     }

// }


//console.log(wordsToGuess.words);











module.export = {
    wordsToGuess: wordsToGuess
};