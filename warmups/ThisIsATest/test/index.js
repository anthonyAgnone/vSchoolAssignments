let { assert } = require('chai');
let getLongestString = require('../app');

describe('Testing longestString function', function() {
	it('Should return bb', function() {
		assert.equal(getLongestString(['', 'a', 'bb', 'cc', 'dd', 'ee']), 'bb');
	});
	it('Should return abcd', function() {
		assert.equal(getLongestString(['abc', 'abcd', 'ab', 'xyzz']), 'abcd');
	});
	it('Should return empty', function() {
		assert.equal(getLongestString(['']), '');
	});
});
