'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


var word = 'hello';
var arr = word.split('');
var solved = ['_','_','_','_','_'];
var maxLives = 5;
var right = 0;
var wrong = 0;
var letter = '';

function getPrompt() {

rl.question('which letter?: ', (letter) => {

    hangman(letter);
    // wrongLetter();

    console.log(solved);
    //print solved
    // document.getElementById('solved').innerHTML = solved;
    // checkForWin(arr, solved);
    if(wrong < 5) {
    getPrompt();
    }

}

)}

function hangman(letter) {

//Loop through the word and find the letter that matches the prompt
for (let i=0;i<arr.length;i++) {

    if(letter === arr[i]) {
    solved[i] = letter;
    right++;
    console.log(right);
    }

}

}

// function checkForWin(arr, solved) {
//     if(arr === solved) {
//     console.log("YOU WIN YOU STUD");
//     }
//     else if(wrong > 5) {
//     console.log("GAME OVER SUCKER");
//     }
// }

// function wrongLetter() {
//     if (hangman(letter) == false) {
//     wrong++;
//     console.log(wrong);
//     }
// }
getPrompt();