/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('test SUM two positive numbers', () => {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
  });

  it('test SUM two negative numbers', () => {
    assert.equal(calculateNumber('SUM', -1, -2), -3);
  });

  it('test SUM one positive and one negative numbers', () => {
    assert.equal(calculateNumber('SUM', 1, -2), -1);
  });

  it('test SUM two positive float numbers', () => {
    assert.equal(calculateNumber('SUM', 1.2, 2), 3);
  });

  it('test SUM two negative float numbers', () => {
    assert.equal(calculateNumber('SUM', -1, -2.4), -3);
  });

  it('test SUM one positive float and one negative float numbers', () => {
    assert.equal(calculateNumber('SUM', 1, -2.6), -2);
  });

  it('test SUM two zeros', () => {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
  });

  it('test SUBTRACT two positive numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
  });

  it('test SUBTRACT two negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -1, -2), 1);
  });

  it('test SUBTRACT one positive and one negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, -2), 3);
  });

  it('test SUBTRACT two positive float numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 2), -1);
  });

  it('test SUBTRACT two negative float numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -1, -2.4), 1);
  });

  it('test SUBTRACT one positive float and one negative float numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, -2.6), 4);
  });

  it('test SUBTRACT two zeros', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });

  it('test DIVIDE two positive numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
  });

  it('test DIVIDE two negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -6, -3), 2);
  });

  it('test DIVIDE one positive and one negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 6, -3), -2);
  });

  it('test DIVIDE two positive float numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 6.2, 2.4), 3);
  });

  it('test DIVIDE two negative float numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -6.2, -2.6), 2);
  });

  it('test DIVIDE one positive float and one negative float numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 6.2, -2.4), -3);
  });

  it('test DIVIDE result float', () => {
    assert.equal(calculateNumber('DIVIDE', 7.2, -2.4), -3.5);
  });

  it('test DIVIDE two zeros', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
  });

  it('test DIVIDE by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 0), 'Error');
  });

  it('test DIVIDE by rounded zero', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 0.3), 'Error');
  });

  it('test DIVIDE with zero', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 6), 0);
  });
});
