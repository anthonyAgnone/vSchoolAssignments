let { assert } = require('chai');
let { missingNo } = require('../app.js');

let tests = [[2, 1, 3, 5], [12, 10, 9], [-3, 0, -2, 3, 2, -1]];

describe('Testing missing number function', function() {
	it('Should return 4', function() {
		assert.strictEqual(missingNo(tests[0]), 4);
	});
});

describe('Testing missing number funciton', function() {
	it('Should return 11', function() {
		assert.strictEqual(missingNo(tests[1]), 11);
	});
});
describe('Testing missing number function', function() {
	it('Should return 1', function() {
		assert.strictEqual(missingNo(tests[2]), 1);
	});
});
