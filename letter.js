//Letter.js should not require any other files. Write Letter.js first and test it on its 
//own before moving on


// Contains a constructor, Letter. This constructor should be able to either display an 
//underlying character or a blank placeholder (such as an underscore), depending on 
//whether or not the user has guessed the letter. 
//That means the constructor should define:
let Letter = function(char){
// A string value to store the underlying character for the letter
    this.visible = !/[a-z1-9]/i.test(char);
    this.char = char;
// A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
// A function that returns the underlying character if the letter has been guessed, 
//or a placeholder (like an underscore) if the letter has not been guessed
}

Letter.prototype.toString = function() {
    if (this.visible === true) {
      return this.char;
    }
    return "_";
  };
// this.letterPush = function(entry){
//     if (guesses.includes(entry)){
//         console.log("p?");
//         return(entry);
//     }else{
//         console.log("_?");
//         return("_");
//     }
// }
// A function that takes a character as an argument and checks it against the underlying 
//character, updating the stored boolean value to true if it was guessed correctly

Letter.prototype.guess = function(userGuess){
    if (userGuess.toUpperCase() === this.char.toUpperCase()) {
        this.guessed = true;
        return true;
      }
    
      return false;
    };



module.exports = Letter;