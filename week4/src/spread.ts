// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// refactor here

const numbersR = [1, 2, 3, 4, 5];
const [even, ...odd] = numbersR;
export default numbersR;

export const originalNumbersR = numbersR.map(number => number);
console.log(originalNumbersR);



// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];

export const originalContenders = runnerUps.unshift(winners[0]);
console.log(originalContenders);

// refactor here

export const winnersR = ['first'];
export const runnerUpsR = ['second', 'third', 'fourth', 'fifth'];

export const combinedR = [...winnersR, ...runnerUpsR];
export const originalContendersR = runnerUpsR.unshift(winnersR[0]);
console.log(originalContendersR);
console.log(combinedR);


// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);

// refactor here

export const bobR = {
  manR: 'Bob'
};

export const kyleR = {
  boyR: 'Kyle'
};

export const originalPersonsR = Object.assign({...bobR, ...kyleR});

console.log(originalPersonsR);




// #4 Modifying values in arrays of objects
export const data = [
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

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return task;
});

// refactor here

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

console.log(originalUpdatesR);

