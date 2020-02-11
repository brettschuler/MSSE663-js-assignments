import { expect } from 'chai';
import 'mocha';

//1

export default [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);

var assert = require('chai').assert
    , numbers = [1, 2, 3, 4, 5];

    assert.typeOf(numbers, 'string');
    assert.equal(numbers);
    assert.lengthOf(numbers,5,'numbers has a length of 5');

    //
const numbersR = [1, 2, 3, 4, 5];
const [even, ...odd] = numbersR;
export default numbersR;

export const originalNumbersR = numbersR.map(number => number);

var assert = require('chai').assert
   , numbersR = [1, 2, 3, 4, 5];

   assert.typeOf(numbersR, 'string');
   assert.equal(numbersR);
   assert.lengthOf(numbersR,5,'numbers has a length of 5');

//2 


export const winnersR = ['first'];
export const runnerUpsR = ['second', 'third', 'fourth', 'fifth'];

export const combinedR = [...winnersR, ...runnerUpsR];
export const originalContendersR = runnerUpsR.unshift(winnersR[0]);


var assert = require('chai').assert
     , winnersR = 'first'
     , runnerUpsR = [ 'second', 'third', 'fourth', 'fifth']
     , combinedR = [...winnersR, ...runnerUpsR]
     , originalContendersR = runnerUpsR;

assert.typeOf(winnersR, 'string';
assert.lengthOf(runnerUpsR, 4,'runnerUpsR length of 4');
assert.equal(originalContendersR, 'runnerUpsR');
     

//3

export const bobR = {
    manR: 'Bob'
  };
  
  export const kyleR = {
    boyR: 'Kyle'
  };
  
  export const originalPersonsR = Object.assign({...bobR, ...kyleR});
  

  var assert = require('chai').assert

    , bobR= { manR: ['Bob']}
    , kyleR= { boyR: ['Kyle']}
    , originalPersonsR= {'bobR','kyleR'};

  assert.typeOf(bobR,'string');
  assert.typeOf(kyleR,'string');
  assert.typeOf(originalPersonsR,'string');


  //#4

  export const dataR = [
    {
      id: 0,
      task: 'Do the thing'
    },
    {
      id: 1,
      task: 'Do the other thing'
    },
    {
      id: 2,
      task: 'Do the last thing'
    }
  ];
  
  export const updateR = {
    id: 1,
    task: 'Do the other thing... again'
  };
  
  export const originalUpdatesR = dataR.map(task => {
    if (task.id === updateR.id) {
      return Object.assign([...dataR],updateR);
    }
    return task;
  });
  

  var assert = require('chai').assert
    , dataR = { task: ['Do the thing', 'Do the other thing', 'Do the last thing' ]}
    , updateR = {task: ['Do the other thing... again']}
    , originalUpdatesR = dataR;

    assert.lengthOf(dataR.task, 3, 'dataR value has length of 3');
    assert.lengthOf(updateR.task, 1, 'dataR value has length of 1');
    assert.equal(originalUpdatesR, dataR, 'OriginalUpdatesR equal `dataR`');
