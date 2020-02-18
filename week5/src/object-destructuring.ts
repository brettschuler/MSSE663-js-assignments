// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

// deconstruct here

export const objectD = { name: 'elvis', title: 'hip swinger' };
console.log(objectD.name); 
console.log(objectD.title); 

// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
var person;
var job;

console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

// deconstruct here

const { user, address, id } = nestedObject;

// expected results:
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1

// #4 Create a new object given the destructed values above

const newObject = {
user: 'elvis',
city: 'denver', state: 'colorado',
id: 1
};

// reconstruct here
console.log(newObject);


// #3 Object with key value pairs: construct a statement
{ greeting: 'hello'; name: 'taylor' };

// construct statement here
let obj = {
  greeting: "hello",
  name: "taylor",
};

console.log( obj.greeting +", "+ obj.name + "!");  
// expected result: 'hello, taylor!'
