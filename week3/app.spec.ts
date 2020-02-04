import { expect } from 'chai';
import 'mocha';

var assert1 = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [4,7,9].indexOf(50));
    });
  });
});

var assert2 = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [11,22,33].indexOf(45));
    });
  });
});


var assert4 = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [6,7,8].indexOf(10));
    });
  });
});
