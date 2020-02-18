"use strict";
// #1 Variable swapping
//export const fruits = ['apple', 'banana'];
var _a;
exports.__esModule = true;
// Currently, I would get the following:
//console.log(a); // 'apple'
//console.log(b); // 'banana'
// deconstruct here
exports.fruitsD = ['apple', 'banana'];
var a = ['apple'];
var b = ['banana'];
_a = [b, a], a = _a[0], b = _a[1];
console.log("" + a);
console.log("" + b);
// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';
// #2 Variables and Rest
exports.food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
// deconstruct here
exports.foodA = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
var aA = exports.foodA[0], bA = exports.foodA[1], othersA = exports.foodA.slice(2);
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
var H = ['hello', 'taylor'];
console.log(H.toString() + "!");
// expected result: 'hello, taylor!'
