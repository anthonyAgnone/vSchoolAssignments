let { assert } = require('chai');
let adjacentDifference = require('../app');

inputArray = [
	['this', 'is', 'an', 'array'],
	['a', 'fine', 'morning', 'this', 'day'],
	['another', 'one', 'for', 'the', 'firebugdad'],
	['a', 'a', 'a']
];

describe('Testing adjacentDifference function', function() {
	it('Should return [is, an, array]', function() {
		assert.equal(adjacentDifference(inputArray[0]), ['is', 'an', 'array']);
	});
	it('Should return [fine, morning, this]', function() {
		assert.equal(adjacentDifference(inputArray[1]), ['fine', 'morning', 'this']);
	});
	it('Should return [for, the, firebugdad]', function() {
		assert.equal(adjacentDifference(inputArray[2]), ['for', 'the', 'firebugdad']);
	});
	it('Should return [a, a, a]', function() {
		assert.equal(adjacentDifference(inputArray[3]), ['a', 'a', 'a']);
	});
});
