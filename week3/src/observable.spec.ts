import { expect } from 'chai';
import 'mocha';


var assertobservable = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [11,22,33].indexOf(45));
    });
  });
});