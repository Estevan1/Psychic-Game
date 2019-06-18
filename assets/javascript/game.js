var letters = ["a", "b", "c"];

// This is the counter for wins and losses  
var wins = 0;
var losses = 0;

// This is what we will use for the count down
var guessesLeft = 10;

// This is the array that will hold what we guess 
var guessedLetters = [];

// This variable will randomly assign on of thr letters 
var letterToGuess = null;

// Creating three functions to updateGuessesLeft, update Guesses, and updateGuessesSoFar
var updateGuessesLeft = function() {
    //Grabbing the HTML element and setting it equal to the guessesLeft.
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
    // Random letterToGuess and assign it based on a random generator.
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
    // Here we take the guesses the user has tried -- then display it as letters seperated as commas. 
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

// Function will be called when we reset everything
var reset = function() {
    guessesLeft = 10;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

// Execute on page Load.
updateLetterToGuess();
updateGuessesLeft();

// This function will capture the keyboard clicks.
document.onkeydown = function(event) {
    // It's going to reduce the guesses by one
    guessesLeft--;

// Lowercase the Letter 
var letter = event.key.toLowerCase();

// Then add the guess to the guessedLetters array
guessedLetters.push(letter);

// Then its going to run the updated functions
updateGuessesLeft();
updateGuessesSoFar();

// We'll check if there's a match
if (letter === letterToGuess) {

    // If there is then we win and we'll update the HTML to display the win.
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    // Then we'll reset the game 
    reset();
}

// If were out of guesses... 
if (guessesLeft === 0) {
    // Then we will lose and we'll update the HTML to display the loss.
    lossess++;
    document.querySelector("#losses").innerHTML = losses;

    // Then reset
    reset();
}

};


