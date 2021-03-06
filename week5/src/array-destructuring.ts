// #1 Variable swapping
//export const fruits = ['apple', 'banana'];

// Currently, I would get the following:
//console.log(a); // 'apple'
//console.log(b); // 'banana'

// deconstruct here

export const fruitsD = ['apple', 'banana'];
let a = ['apple'];
let b = ['banana'];
[a, b] = [b, a];
console.log(`${a}`);
console.log(`${b}`);


// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here


export const foodA = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
const [aA, bA, ...othersA] = foodA;
console.log(aA);
console.log(bA);
console.log(othersA);

// expected result:
console.log(aA); // 'apple'
console.log(bA); // 'banana'
console.log(othersA); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
['hello', 'taylor'];

// construct statement here

let H = ['hello', 'taylor'];

console.log(H.toString()+"!");


// expected result: 'hello, taylor!'
