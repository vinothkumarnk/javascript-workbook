'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here

}

function isLegal() {
  

//rules for b
if (stacks.b.pop!=null){
  if((stacks.a.pop!=null && stacks.b.pop < stacks.a.pop) || (stacks.c.pop!=null && stacks.b.pop < stacks.c.pop))
    return false;
}

//rules for c
else if (stacks.c.pop!=null){
  if((stacks.a.pop!=null && stacks.c.pop < stacks.a.pop) || (stacks.b.pop!=null && stacks.c.pop < stacks.b.pop))
    return false;
}

//rules for a
else if (stacks.a.pop!=null){
  if((stacks.c.pop!=null && stacks.a.pop < stacks.c.pop) || (stacks.b.pop!=null && stacks.a.pop < stacks.b.pop))
    return false;
}

else
return true;

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
