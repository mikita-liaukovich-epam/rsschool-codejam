const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('../src/sumOfOther.js');

describe('sumOfOther', () => {
  it('1', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });
  it('2', () => {
    const result = sumOfOther([1, 5, 6, 8, 10, 12]);
    assert.deepEqual(result, [41, 37, 36, 34, 32, 30]);
  });
  it('3', () => {
    const result = sumOfOther([1, 5, 6, 8, 10, 122]);
    assert.deepEqual(result, [151, 147, 146, 144, 142, 30]);
  });

});
