import { expect } from 'chai';
import 'mocha';
import {curryMe2,doMath2,blackBelts,NinjaWarrior1} from './currying-resubmit';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(curryMe2('Howdy')('Yall')('YeeHah')).to.equal(curryMe('Howdy', 'Yall', 'YeeHah')
    );
  });

  it('#2 should output the same result as the original function', () => {
    expect(doMath2)(1)(2)(3).to.equal(doMath(1)(2)(3));
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    const expected = [
        { name: 'Leonardo', belt: 'black' },
        { name: 'Mr. Miyagi', belt: 'black' },
        { name: 'Rocky', belt: 'black' },
        { name: 'The Bride', belt: 'black' },
        { name: 'Cammy', belt: 'black' },
        { name: 'Raphael', belt: 'black' },
        { name: 'Jim', belt: 'black' },
        { name: 'The Rat', belt: 'black' }
    ];
    expect(blackBelts).to.eql(expected);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    const ninjasWithStatus1 = [
            {  name: 'Michelangelo', belt: 'white', status: 'grasshopper' },
            {  name: 'Donatello', belt: 'green', status: 'warrior' },
            {  name: 'Raphael', belt: 'black', status: 'sensei' },
            {  name: 'Leonardo', belt: 'black', status: 'sensei' },
            {  name: 'Mr. Miyagi', belt: 'black', status: 'sensei' },
            {  name: 'Rocky', belt: 'black', status: 'sensei' },
            {  name: 'Colt', belt: 'green', status: 'warrior' },
            {  name: 'Tum Tum ', belt: 'white', status: 'grasshopper' },
            {  name: 'Haru', belt: 'white', status: 'grasshopper' },
            {  name: 'The Bride', belt: 'black', status: 'sensei' },
            {  name: 'Cammy', belt: 'black', status: 'sensei' },
            {  name: 'Wong Fei-hung', belt: 'green', status: 'warrior' }
            ];

    const ninjasWithStatus2 = [
            {  name: 'Michelangelo', belt: 'white', status: 'Noob' },
            {  name: 'Donatello', belt: 'green', status: 'Choob' },
            {  name: 'Raphael', belt: 'black', status: 'Legend' },
            {  name: 'Jim', belt: 'black', status: 'Legend' },
            {  name: 'The Rat', belt: 'black', status: 'Legend' }
    ];


    expect(NinjaWarrior1).to.eql(ninjasWithStatus1);
    expect(NinjaWarrior1).to.eql(ninjasWithStatus2);
  });
});
