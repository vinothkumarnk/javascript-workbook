'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  
  // This function takes in string as a parameter and calls another function named vowel. If the vowel is present as 
  //the first character in the string, the function would return "yay" else it will move that character to the last.

  function pigLatin(word){
    var string = word.toLowerCase().trim();
    if(vowel(string.charAt(0)))
      return string+"yay";
    else
     return move(string);
    }


//This function returns true or false if the character passed is a vowel or not respectively.
function vowel(word)
{
  if((word=="a")||(word=="e")||(word=="i")||(word=="o")||(word=="u"))
    return true;
    else
    return false;
  
}

//This function appends "ay" at the last of the moved characters. For example: If the text is "latin", it will return "atinlay".
function move(text){
  var str='';
  var str1='';
  var i =0;
    while(!vowel(text.charAt(i)) && i<=text.length){
      str = str + text.charAt(i);
      i++;
    }
   // return str+"ay";
    while(i<=(text.length-str.length)+1){
      str1=str1+text.charAt(i);
      i++;
    }
    return str1+str+"ay";
  }

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
