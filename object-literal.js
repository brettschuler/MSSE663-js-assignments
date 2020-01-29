/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */


 // #1
var monkey

// #2 
var monkey = {color: 'brown', hair: 'short', arms: 2, legs: 2};

// #3
function monkey (color, hair, arms, legs) {
  this.color = color;
  this.hair = hair;
  this.arms = arms;
  this.legs =legs;
  this.showMonkey = showMonkey;
}

function monkey2 (swing, grab) {
  this.swing = swing;
  this.grab = grab;
  this.showMonkey2 = showMonkey2;
}

//#4 
console.log(monkey);
console.log(monkey2);


//#5

class MonkeyTroop {
  constructor(monkey, monkey2) {
	this.monkey = monkey;
        this.monkey2 = monkey2;
   }
}

//#6
console.log(MonkeyTroop);
