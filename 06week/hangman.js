'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


var word = 'Hello';
var arr = word.split('');
var solved = ['_','_','_','_','_'];
var maxLives = 5;
var counter=0;
var letter = '';

function getPrompt() {

    rl.question('which letter?: ', (letter) => {

    hangman(letter);
    console.log(solved);
        if(counter < 5){
        getPrompt();
        }
        else{
        console.log("GAME OVER SUCKER");
        }

    });

};

function hangman(letter){

//Loop through the word and find the letter that matches the prompt
    for (let i=0;i<arr.length;i++){

        if(letter === arr[i] ){
        solved[i] = letter;
        }
    }
counter++;
}
getPrompt();

// compare the arrays first, if the arrays are equal to each other, then you win. Create new function called checkForWin
