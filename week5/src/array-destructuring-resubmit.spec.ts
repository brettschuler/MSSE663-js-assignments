import { expect } from 'chai';
import 'mocha';
import {a,b,others,c,d,statement} from './array-destructuring-resubmit';

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(b).to.equal('apple');
    expect(a).to.equal('banana');
  });
  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(c).to.equal('apple');
    expect(d).to.equal('banana');
    expect(others).to.eql.(['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza']);
  });
  it('#3 should construct a statement from the given objarrayect', () => {
    expect(statement).o.equal('hello taylor!');
  });
});
