// #1 Convert this javascript function to a curried function
function curryMe(string1, string2, string3): string {
  return string1 + ' ' + string2 + ' ' + string3;
}

// source code here

function curryMeA(string1) {
  return (string2) => {

    return (string3) => {
      
        return string1 + ' ' + string2 + ' ' + string3;
    };
  };
};



// #2 Hoist and convert nested functions to curried functions
function doMath(a) {
  return function add(b) {
    return function subtract(c) {
      return a + b - c;
    };
  };
}

// source code here


newFunc(a);

var newFunc = function newHoist ()  {
  doMath(a); => add(b); => subtract(c); => return a + b - c;
}

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
const ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here
Array.prototype.push.apply(ninjasOne,ninjasTwo); 
const combined = ninjasOne.filter(({ belt: id2 }) => id2 === "black");
console.log(combined);  

/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

// source code here
Array.prototype.push.apply(statusTypes,gamerStatusTypes); 
const status = ninjasOne.filter(({ belt: id2 }) => id2 === "");
console.log(status);  


//new code
const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

// source code here
Array.prototype.push.apply(statusTypes,gamerStatusTypes); 
const status = statusTypes.any(({ black: id3 }) => id3 === " ");
console.log(status);  