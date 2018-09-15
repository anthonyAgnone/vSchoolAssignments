let { assert } = require('chai');
let sum = require('../app.js');

describe('Testing sum function', function() {
	it('Should return 8', function() {
		assert.equal(sum(5, 3), 8);
	});
	it('Should return -14', function() {
		assert.equal(sum(-4, -10), -14);
	});
	it('Should return 0', function() {
		assert.equal(sum(0, 0), 0);
	});
	it('Should return -2', function() {
		assert.equal(sum(-5, 3), -2);
	});
});
