/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
const things: string[] = ['thing1', 'thing2'];

// create callback here

const callback = (things: string) => things;
console.log(callback);

// create map here


const array1 = [1, 2, 3, 4];

const map1 = array1.map(x => "id:" + x + " name things");

console.log(map1);




/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

// create function here

const key = () => 'hello';
console.log(key());
function check(map1) {
    return map1 === 'thing';

  }
  map1.filter(check);