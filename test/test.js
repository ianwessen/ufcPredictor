const util = require('../util.js');
const chai = require('chai');
const expect = chai.expect;

describe('curry', function() {
	
	// A curried function will return a function when you don't give it all of its params
	// curry(f) :: (a,b,c) -> f(a) -> f(b) -> f(c)
	
	it('should return a function', function() {
		const add = function(a,b) { return a + b }
		expect(util.curry(add)).to.be.a('function');
	});
	
	it('should throw an error if there is no valid function provided as an argument', function() {
		expect(util.curry()).to.throw(TypeError)
	});
	
	it('should allow partial application', function() {
		// const add = function(a,b) { return a + b }
		// const add3 = util.curry(add)(3)
		// expect(util.curry(add3)(4)).to.equal(7);
	});
});

describe('compose()', function() {
	// Writing my test
});
