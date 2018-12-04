// Word.js should only require Letter.js Write Letter.js 2nd and test it on its 
//own before moving on

const Letter = require("./letter")

var wordBank = ['purple', 'red', 'yellow', 'green'];

// Contains a constructor, Word that depends on the Letter constructor. This is used 
//to create an object representing the current word the user is attempting to guess. 
//That means the constructor should define:
function Word(word){
// An array of new Letter objects representing the letters of the underlying word
this.word = word;
this.letter = [];
this.allCorrect = false;

this.randomWord = function(){
    let randomNumber = Math.floor(Math.random() * wordBank.length);
    this.currentWord = wordBank[randomNumber];
    this.lettersLength = currentWord.length;
    return this.currentWord;
  }
  this.splitWord = function() {
    this.lettersArray = this.split(""); 
    return this.lettersArray;
  }
  this.getLetters = function () {
    for (var i = 0; i < this.length; i++) {
      var newLetter = new Letter(this.word[i]);
      this.letters.push(newLetter);
    };

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

//******************************* */


  //checks to see if the letter is in the word
  this.wordCheck = function () {
    if (this.letters.every(function (ltr) {
      return ltr.appear === true;
    })) {
      this.wordFound = true;
      return true;
    };
  };


  this.checkLetter = function (guessedLetter) {
    let whatToReturn = true;
    this.letters.forEach(function (ltr) {
      if (ltr.letter === guessedLetter) {
        ltr.appear = true;
        whatToReturn++;
      };
    });
    return whatToReturn;
  };


  this.wordShow = function () {
    let display = '';
    this.letters.forEach(function (ltr) {
      let currentLetter = ltr.letterShow();
      display += currentLetter;
    });
    return display;
  };
};



module.exports = Word;