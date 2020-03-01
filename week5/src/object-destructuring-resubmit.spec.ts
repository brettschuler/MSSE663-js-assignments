import { expect } from 'chai';
import 'mocha';
import  {user,address,city,state,id,reconstructObj,nestedObject,statement} from './object-destructuring-resubmit';


describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    expect(person).to.equal('elvis');
    expect(job).to.equal('hip swinger');
  });
  it('#2 should have a variable for every property in the given nested object', () => {
    expect(user).to.equal('elvis');
    expect(address).to.eql({
        city: 'Denver',
        state: 'Colorado'
  });
    expect(id).to.equal(1);
  });
  it('#3 should create a new object given the destructed variables from the nested object', () => {
    expect(reconstructObj).to.be.eql(nestedObject);
  });
  it('#4 should construct a statement from the given object', () => {});
    expect(statement).to.equal('hello Taylor!');
  });
