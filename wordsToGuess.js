var wordsToGuess = {
    words: ["Beyonce", "Prince", "Sting", "Madonna", "Drake", "Elvis", "Elton", "Janis"]

};



var wordForUserToGuess = wordsToGuess.words[Math.floor(Math.random() * wordsToGuess.words.length)];

console.log(wordForUserToGuess);

//console.log(wordsToGuess.words);











module.export = {
    wordsToGuess: wordsToGuess
};