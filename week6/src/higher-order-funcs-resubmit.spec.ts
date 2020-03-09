import { expect } from 'chai';
import 'mocha';
import { mappedThings, filteredThing } from './higher-order-funcs-resubmit.ts';

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
      const expected = [
        { id: 1, name: 'thing1'},
        { id: 2, name: 'thing2'}
      ];

      expect(mappedThings).to.eql(expected);

  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {
       expect(filteredThing('thing1')('name')).to.eql([{ id: 1, name: 'thing1'}]);

  });
});
