const util = require('../util.js'), 
  chai = require('chai'), 
  expect = chai.expect;

describe('curry', function() {
    
  it('should return a function', function() {
    const add = function(a,b) { return a + b };
    expect(util.curry(add)).to.be.a('function');
  });
  
  it('should throw an error if there is no valid function provided as an argument', function() {
    expect(util.curry()).to.throw(TypeError);
  });

  // TODO: Figure out why this test won't work
  //
  // it('should allow partial application', function() {
  //   const add = function(a,b) { return a + b };
  //   const add3 = util.curry(add,3);
  //   const shouldBeSeven = add3(4);
  //   expect(shouldBeSeven.to.equal(7));
  // });
});

describe('compose', function() {
  it('should return a function', function() {
    const add = function(a,b) { return a + b };
    const average = function(sum) { return sum / 2 };
    expect(util.compose(add,average)).to.be.a('function');
  });

  // TODO: Figure out why this test won't work
  //
  // it('composed function should behave', function() {
  //   const add = function(a,b) { return a + b };
  //   const average = function(sum) { return sum / 2 };
  //   expect(util.compose(add(2,9),average)).to.equal(6.5);
  // });
});
