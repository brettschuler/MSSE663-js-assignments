import { expect } from 'chai';
import 'mocha';
import { newNumbers, originalNumbers, originalContenders, newContenders, newPersons, originalPersons,newUpdates,originalUpdates};

describe('Spread Resubmit app', ()=>{
  it('copy originalNumbers to newNumbers', ()=>{
    expect(newNumbers).to.eql(originalNumbers);
  });
  it('combine originalContenders to newContenders', ()=>{
    expect(newContenders).to.eql(originalContenders);
  });
  it('should combine my into one object', ()=>{
    expect(newPersons).to.eql(originalPersons);
  });
  it('should update another task', ()=>{
    expect(newUpdates).to.eql(originalUpdates);
});
});