let userName = prompt("What's your name?");
let number = (Math.floor(Math.random() * 50)+1);
console.log("Correct number: ", number);
let guesses = 0;
console.log(guesses)
let gameActive = true;
let numberGuess; 

while (gameActive && guesses === 0) {
    numberGuess = prompt(`Hey ${userName}! Guess a number between 1 and 50! You have 3 chances left.`);
        switch (true) {
            case isNaN(numberGuess):
                alert(`Now, ${userName}! You know that's not a number. Try again, and enter a number between 1-50.`);
                break;
            case (numberGuess > number):
                alert(`Nope! That number is too high! Try again, ${userName}. You have 2 guesses remaining.`);
                guesses++;
                break;
            case numberGuess < number:
                alert(`Nope! That number is too low! Try again, ${userName}. You have 2 guesses remaining.`);
                guesses++;
                break;
            case numberGuess == number:
                alert(`You have won! Congratulations, ${userName}! ${number} is the correct number.`);
                gameActive = false;
                break;
            default:
                alert("Hmmm, that doesn't look right. Make sure you're using a whole number between 1-50 and try again!")
        }
}
    

    console.log(guesses);

    while (gameActive && guesses === 1) {
        numberGuess = prompt("Guess a number between 1 and 50! You have 2 chances left.");
            switch (true) {
                case isNaN(numberGuess):
                    alert(`Now, ${userName}! You know that's not a number. Try again, and enter a number between 1-50.`);
                    break;
                    case (numberGuess > number):
                        alert(`Sorry, ${userName}! That number is too high! Try again. You have 1 more guess.`);
                        guesses++;
                        break;
                    case numberGuess < number:
                        alert(`Sorry, ${userName}! That number is too low! Try again. You have 1 more guess.`);
                        guesses++;
                        break;
                    case numberGuess == number:
                        alert(`You did it, ${userName}! Congratulations! ${number} is the correct number.`)
                        gameActive = false;
                        break;
                    default:
                        alert("Hmmm, that doesn't look right. Make sure you're using a whole number between 1-50 and try again!")
        }
    } 
    console.log(guesses);
    while (gameActive && guesses === 2) {
        numberGuess = prompt("Guess a number between 1 and 50! If you get this wrong, you lose the game.");
            switch (true) {
                case isNaN(numberGuess):
                    alert(`Now, ${userName}! You know that's not a number. Try again, and enter a number between 1-50.`);
                    break;
                case (numberGuess > number):
                    alert(`Sorry, ${userName}, that number was too high. You have lost the game. The correct number was ${number}.`);
                    gameActive = false;
                    break;
                case numberGuess < number:
                    alert(`Sorry, ${userName}, that number was too low. You have lost the game. The correct number was ${number}.`);
                    gameActive = false;
                    break;
                case numberGuess == number:
                    alert(`Whew, you did it! Congratulations, ${userName}! ${number} is the correct number.`);
                    gameActive = false;
                    break;
                default:
                    alert("Hmmm, that doesn't look right. Make sure you're using a whole number between 1-50 and try again!")
        }
    } 













// Original code for reference

//Stretch Goal 1
//Allow for user name add

// let userName = prompt("What's your name?");

// //Round 1
// //User prompt to guess a number between 1-50
// //If the user is correct, alert you won and the number.
// //If user is incorrect, alert you're wrong, if it is too high or low, and how many chances.

// //Stretch Goal 2
// //Set up an alert if a user enters characters that is NaN round.
// //Set up to redo the prompt after the alert for each round.

// let number = (Math.floor(Math.random() * 50)+1);
// console.log(number);
// let guesses = 0;
// let numberGuess = prompt(`Hey ${userName}! Guess a number between 1 and 50! You have 3 chances left.`);
// if (numberGuess == number) {
//     alert(`You have won! Congratulations, ${userName}! ${number} is the correct number.`);
// } else if (numberGuess > number && guesses == 0) {
//     alert(`Nope! That number is too high! Try again, ${userName}. You have 2 guesses remaining.`, guesses++);
// } else if (numberGuess < number && guesses == 0) {
//     alert(`Nope! That number is too low! Try again, ${userName}. You have 2 guesses remaining.`, guesses++); 
// } else if (isNaN(numberGuess)) {
//     alert(`Now, ${userName}! You know that's not a number. Try again, and enter a number between 1-50.`);
//     numberGuess = prompt(`Hey ${userName}! Guess a number between 1 and 50! You have 3 chances left.`);
//     if (numberGuess == number) {
//         alert(`You have won! Congratulations, ${userName}! ${number} is the correct number.`);
//     } else if (numberGuess > number && guesses == 0) {
//         alert(`Nope! That number is too high! Try again, ${userName}. You have 2 guesses remaining.`, guesses++);
//     } else if (numberGuess < number && guesses == 0) {
//         alert(`Nope! That number is too low! Try again, ${userName}. You have 2 guesses remaining.`, guesses++); 
//     }
// }
// //Round 2
// //User prompt to guess the number again, with chances left decremented
// //If the user is correct, alert you won and the number.
// //If the user is incorrect, alert you're wrong, if it is too high or low, and how many chances are left, decremented automatically from the above based on guess count.


// if (numberGuess != number && guesses == 1) {
//     numberGuess = prompt("Guess a number between 1 and 50! You have 2 chances left.");
// }
// if (numberGuess == number && guesses == 1) {
//     alert(`You did it, ${userName}! Congratulations! ${number} is the correct number.`);
// } else if (numberGuess > number && guesses == 1) {
//     alert(`Sorry, ${userName}! That number is too high! Try again. You have 1 more guess.`, guesses++);
// } else if (numberGuess < number && guesses == 1) {
//     alert(`Sorry, ${userName}! That number is too low! Try again. You have 1 more guess.`, guesses++); 
// } else if (isNaN(numberGuess)) {
//     alert(`Now, ${userName}! You know that's not a number. Try again, and enter a number between 1-50.`);
//     if (numberGuess != number && guesses == 1) {
//     numberGuess = prompt("Guess a number between 1 and 50! You have 2 chances left.");
//     }
//     if (numberGuess == number && guesses == 1) {
//         alert(`You did it, ${userName}! Congratulations! ${number} is the correct number.`);
//     } else if (numberGuess > number && guesses == 1) {
//         alert(`Sorry, ${userName}! That number is too high! Try again. You have 1 more guess.`, guesses++);
//     } else if (numberGuess < number && guesses == 1) {
//         alert(`Sorry, ${userName}! That number is too low! Try again. You have 1 more guess.`, guesses++);
//     }
// }
// //Round 3
// //User prompt to guess the number again, with chances left at 0
// //If user is correct, alert you won with number.
// //If the user is incorrect, alert they lost the game and give the number.

// if (numberGuess != number && guesses == 2) {
//     numberGuess = prompt("Guess a number between 1 and 50! If you get this wrong, you lose the game.");
// }
// if (numberGuess == number && guesses == 2) {
//     alert(`Whew, you did it! Congratulations, ${userName}! ${number} is the correct number.`);
// } else if (numberGuess > number && guesses == 2) {
//     alert(`Sorry, ${userName}, that number was too high. You have lost the game. The correct number was ${number}.`);
// } else if (numberGuess < number && guesses == 2) {
//     alert(`Sorry, ${userName}, that number was too low. You have lost the game. The correct number was ${number}.`);
// }else if (isNaN(numberGuess)) {
//     alert(`Now, ${userName}! You know that's not a number. Try again, and enter a number between 1-50.`);
//     if (numberGuess != number && guesses == 2) {
//         numberGuess = prompt("Guess a number between 1 and 50! If you get this wrong, you lose the game.");
//     }
//     if (numberGuess == number && guesses == 2) {
//         alert(`Whew, you did it! Congratulations, ${userName}! ${number} is the correct number.`);
//     } else if (numberGuess > number && guesses == 2) {
//         alert(`Sorry, ${userName}, that number was too high. You have lost the game. The correct number was ${number}.`);
//     } else if (numberGuess < number && guesses == 2) {
//         alert(`Sorry, ${userName}, that number was too low. You have lost the game. The correct number was ${number}.`);
//     }
// }
// //Stretch Goal 3
// //User needs the option to restart the game after it's over
