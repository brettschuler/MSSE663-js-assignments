// #1 Convert this javascript function to a curried function
declare var require: any

function curryMe(string1, string2, string3): string {
  return string1 + ' ' + string2 + ' ' + string3;
}

// source code here

export const curryMe2 = string1 => string2 => (string3): string =>
     string1 + ' ' + string2 + ' ' + string3;

// #2 Hoist and convert nested functions to curried functions
function doMath(a) {
  return function add(b) {
    return function subtract(c) {
      return a + b - c;
    };
  };
}

// source code here

export const subtract = (a: number) => (b: number) => (c: number) => a + b - c;

export const add = (a: number) => (b: number) => (c: number) => subtract(a)(b)(c);

export const doMath2 = (a: number) => (b: number) => (c: number) => add(a)(b)(c);





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

export const blackBelts: Ninja[] = [...ninjasOne, ...ninjasTwo].filter(ninja => ninja.belt === "black");


/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

 type plainObj = { [key: string]: string };

 interface NinjaWarrior extends Ninja {
     status: plainObj;
 }

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
export const NinjaWarrior1: NinjaWarrior[] = ninjasOne.map((ninja: Ninja) => {
   return {
       ...ninjasOne,
       status: statusTypes[ninja.belt]
   };
});