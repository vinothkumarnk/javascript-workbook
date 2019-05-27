

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

function movePiece(startStack, endStack) {
  // Move the piece from one stack to another
if (startStack == 'a' && endStack == 'b')
stacks.b.push(stacks.a.pop);
else if (startStack == 'a' && endStack == 'c')
stacks.c.push(stacks.a.pop);
else
stacks.c.push(stacks.a.pop);

}

function isLegal() {
  //Check whether the move is legal by checking the value from each stack. 
if (stacks.b.length === 0 && stacks.c.length ===0)
return true;
else if (stacks.b.pop!=null && stacks.a.pop < stacks.b.pop)
return true;
else if(stacks.c.pop!=null && stacks.a.pop < stacks.c.pop)
return true;
else
return false;
}

function checkForWin() {
  // check whether the length of the stack is equal to 4 and then act acccordingly
  if (stacks.c.length === 4 || stacks.b.length ===4){
    return true;
    }
    else return false;
}

function towersOfHanoi(startStack, endStack) {
  //Check for legal move, move the piece and check for win
  if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
    checkForWin();
  } else {
    return false;
   }

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
