const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('SUM two positive numbers', () => {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
  });

  it('SUM two negative numbers', () => {
    assert.equal(calculateNumber('SUM', -1, -2), -3);
  });

  it('SUM one positive and one negative numbers', () => {
    assert.equal(calculateNumber('SUM', 1, -2), -1);
  });

  it('SUM two positive float numbers', () => {
    assert.equal(calculateNumber('SUM', 1.2, 2), 3);
  });

  it('SUM two negative float numbers', () => {
    assert.equal(calculateNumber('SUM', -1, -2.4), -3);
  });

  it('SUM one positive float and one negative float numbers', () => {
    assert.equal(calculateNumber('SUM', 1, -2.6), -2);
  });

  it('SUBTRACT two positive numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
  });

  it('SUBTRACT two negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -1, -2), 1);
  });

  it('SUBTRACT one positive and one negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, -2), 3);
  });

  it('SUBTRACT two positive float numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 2), -1);
  });

  it('SUBTRACT two negative float numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -1, -2.4), 1);
  });

  it('SUBTRACT one positive float and one negative float numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, -2.6), 4);
  });

  it('DIVIDE two positive numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
  });

  it('DIVIDE two negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -6, -3), 2);
  });

  it('DIVIDE one positive and one negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 6, -3), -2);
  });

  it('DIVIDE two positive float numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 6.2, 2.4), 3);
  });

  it('DIVIDE two negative float numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -6.2, -2.6), 2);
  });

  it('DIVIDE one positive float and one negative float numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 6.2, -2.4), -3);
  });

  it('DIVIDE by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 0), 'Error');
  });
});
