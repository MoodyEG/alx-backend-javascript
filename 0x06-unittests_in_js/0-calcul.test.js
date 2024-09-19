const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('two zeros', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });

  it('two int', () => {
    assert.equal(calculateNumber(1, 2), 3);
  });

  it('one int one round float', () => {
    assert.equal(calculateNumber(1.5, 2), 4);
  });

  it('one int one non round float', () => {
    assert.equal(calculateNumber(1.3, 2), 3);
  });

  it('round float', () => {
    assert.equal(calculateNumber(1.5, 2.5), 5);
  });

  it('not exact', () => {
    assert.notEqual(calculateNumber(1.5, 2.5), 4);
  });

  it('negative numbers', () => {
    assert.equal(calculateNumber(-1.5, -2.5), -3);
  });

  it('negative and positive numbers', () => {
    assert.equal(calculateNumber(-1.5, 2.5), 2);
  });
});
