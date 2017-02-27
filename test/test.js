const chai = require('chai'),
  expect = chai.expect;

const utility = require('../app/utility.js');

describe('curry', function() {
  
  it('should return a function', function() {
    const add = function(a,b) { return a + b };
    expect(utility.curry(add)).to.be.a('function');
  });
  
  it('should throw an error if there is no valid function provided as an argument', function() {
    expect(utility.curry()).to.throw(TypeError);
  });
  
});

describe('compose', function() {
  
  it('should return a function', function() {
    const add = function(a,b) { return a + b };
    const average = function(sum) { return sum / 2 };
    expect(utility.compose(add,average)).to.be.a('function');
  });
  
});
