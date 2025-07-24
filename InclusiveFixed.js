const prompt = require('prompt-sync')();

let min = 1;
let max = 10;

let userInput = parseInt(prompt("Enter a number between 1 and 10: "));

if (userInput >= min && userInput <= max) {
    console.log("Valid input:", userInput);
} else {
    console.log("Invalid input. Please enter a number between 1 and 10.");
}
