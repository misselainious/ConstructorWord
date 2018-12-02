// Word.js should only require Letter.js Write Letter.js 2nd and test it on its 
//own before moving on

const Letter = require("./letter")

// Contains a constructor, Word that depends on the Letter constructor. This is used 
//to create an object representing the current word the user is attempting to guess. 
//That means the constructor should define:
let Word = function(){
// An array of new Letter objects representing the letters of the underlying word
let chosenWord = [];

let spaces = new Letter();

// A function that returns a string representing the word. This should call the function 
//on each letter object (the first function defined in Letter.js) that displays the 
//character or an underscore and concatenate those together.
let showWord = [];

function returnWord(){
    for(y of chosenWord){
        showWord.push(checkLetter(y));
    }
}
// A function that takes a character as an argument and calls the guess function on each 
//letter object (the second function defined in Letter.js)
function guessChar(z){
    guess();
}
}



