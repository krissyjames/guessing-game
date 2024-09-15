//Round 1
//User prompt to guess a number between 1-50
//If the user is correct, alert you won and the number.
//If user is incorrect, alert you're wrong, if it is too high or low, and how many chances.

let number = (Math.floor(Math.random() * 50)+1);
console.log(number);
let guesses = 0;
let numberGuess = prompt("Guess a number between 1 and 50! You have 3 chances left.");
if (numberGuess == number) {
    alert(`You have won! Congratulations! ${number} is the correct number.`);
} else if (numberGuess > number && guesses == 0) {
    alert("Nope! That number is too high! Try again. You have 2 guesses remaining.", guesses++);
} else if (numberGuess < number && guesses == 0) {
    alert("Nope! That number is too low! Try again. You have 2 guesses remaining.", guesses++); 
}
//Round 2
//User prompt to guess the number again, with chances left decremented
//If the user is correct, alert you won and the number.
//If the user is incorrect, alert you're wrong, if it is too high or low, and how many chances are left, decremented automatically from the above based on guess count.

if (numberGuess != number && guesses == 1) {
    numberGuess = prompt("Guess a number between 1 and 50! You have 2 chances left.");
}
if (numberGuess == number && guesses == 1) {
    alert(`You did it! Congratulations! ${number} is the correct number.`);
} else if (numberGuess > number && guesses == 1) {
    alert("Sorry! That number is too high! Try again. You have 1 more guess.", guesses++);
} else if (numberGuess < number && guesses == 1) {
    alert("Sorry! That number is too low! Try again. You have 1 more guess.", guesses++); 
}

//Round 3
//User prompt to guess the number again, with chances left at 0
//If user is correct, alert you won with number.
//If the user is incorrect, alert they lost the game and give the number.

if (numberGuess != number && guesses == 2) {
    numberGuess = prompt("Guess a number between 1 and 50! If you get this wrong, you lose the game.");
}
if (numberGuess == number && guesses == 2) {
    alert(`Whew, you did it! Congratulations! ${number} is the correct number.`);
} else if (numberGuess > number && guesses == 2) {
    alert(`Sorry, that number was too high. You have lost the game. The correct number was ${number}.`);
} else if (numberGuess < number && guesses == 2) {
    alert(`Sorry, that number was too low. You have lost the game. The correct number was ${number}.`);
}

