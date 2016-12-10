const server = require('../server.js')
const chai = require('chai');
const assert = chai.assert

describe('curry', function() {
	// A curried function will return a function when you don't give it all of its params
	// curry(f) :: (a,b,c) -> f(a) -> f(b) -> f(c)
	it('should return a function', function() {
		const add = function(a,b) { return a + b }
		assert(curry(add)).to.be.a('function');
	});
	
	// it('should throw an error if there is no valid function provided as an argument', function() {
	// 	assert( function() {
	// 		curry();
	// 	}).to.throw('No function provided')
	// });
});

describe('compose()', function() {
	// Writing my test
});
