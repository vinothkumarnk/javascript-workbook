'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // Your code here

  if (color == 'white')
    this.symbol = String.fromCharCode(0x125CB);
  else
    this.symbol = String.fromCharCode(0x125CF);

}

class Board {

  constructor() {
    this.grid = [];
    this.checkers = [];

    this.selectChecker = function(row, column){
      return this.grid[row][column];
    }


    this.createCheckers = function () {

      const white = new Checker('white');
      const black = new Checker('black');

      for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
          //for white
          //row even
          if (row < 3 && row % 2 == 0 && column % 2 !== 0) {
            this.checkers.push(white);
            this.grid[row][column] = white;
          } 
          //row odd
          if (row < 3 && row % 2 !== 0 && column % 2 == 0) {
            this.checkers.push(white);
            this.grid[row][column] = white;
          } 
          
          //for black
          //row even
          if (row > 4 && row % 2!== 0 && column % 2== 0) {
            this.checkers.push(black);
            this.grid[row][column] = black;
          } 
          //row odd
          if (row > 4 && row % 2== 0 && column % 2!== 0) {
            this.checkers.push(black);
            this.grid[row][column] = black;
          } 
        }
      }
    }
  }


  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }


  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here




}

class Game {
  constructor() {
    this.board = new Board;
    this.moveChecker = function(start, end){
        //start = start/10, start%100 - this is to capture row and column
      var checker = selectChecker();
    }
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}