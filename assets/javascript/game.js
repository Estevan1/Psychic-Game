var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k ", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guesses = 10;
var letterUser = [];
var eachofLetters = null;

var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var userChoiceText = document.getElementById("user-guess-text");

var guessesLeft = function countGuesses () {
    guesses - 1;
    
}

var restart = function() {
	guessesLeft = 10;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function(event) {
    var letterUser = String.fromCharCode(event.keyCode).toLowerCase();
    var userGuess = event.key;{

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
        if (userGuess === computerGuess){
            wins++;
            restart();
        }
        else if (userGuess != computerGuess){
            losses++;
        } 
        else if (guessesLeft === 0) {
            losses++;
            restart();
        }
  
        computerChoiceText.textContent = "the computer chose : " + computerGuess
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "Guesses left: " + guesses;
        userChoiceText.textContent = "You chose: " + userGuess;

    }
};

