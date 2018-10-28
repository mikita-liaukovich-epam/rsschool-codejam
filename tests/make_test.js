const assert = require('assert');

Object.freeze(assert);
const make = require('../src/make.js');
const sum = require('../src/make.js');

describe('make', () => {
  it('1', () => {
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });
  it('2', () => {
    assert.deepEqual(make(10)(50, 555)(51)(sum), 666);
  });
  it('3', () => {
    assert.deepEqual(make(54)(646)(10, 37)(414, 227, 510)(101)(sum), 1999);
  });
});
