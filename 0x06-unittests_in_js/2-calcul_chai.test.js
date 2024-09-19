/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber chai', () => {
  it('test SUM two positive numbers', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });

  it('test SUM two negative numbers', () => {
    expect(calculateNumber('SUM', -1, -2)).to.equal(-3);
  });

  it('test SUM one positive and one negative numbers', () => {
    expect(calculateNumber('SUM', 1, -2)).to.equal(-1);
  });

  it('test SUM two positive float numbers', () => {
    expect(calculateNumber('SUM', 1.2, 2)).to.equal(3);
  });

  it('test SUM two negative float numbers', () => {
    expect(calculateNumber('SUM', -1, -2.4)).to.equal(-3);
  });

  it('test SUM one positive float and one negative float numbers', () => {
    expect(calculateNumber('SUM', 1, -2.6)).to.equal(-2);
  });

  it('test SUM two zeros', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });

  it('test SUBTRACT two positive numbers', () => {
    expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
  });

  it('test SUBTRACT two negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -1, -2)).to.equal(1);
  });

  it('test SUBTRACT one positive and one negative numbers', () => {
    expect(calculateNumber('SUBTRACT', 1, -2)).to.equal(3);
  });

  it('test SUBTRACT two positive float numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 2)).to.equal(-1);
  });

  it('test SUBTRACT two negative float numbers', () => {
    expect(calculateNumber('SUBTRACT', -1, -2.4)).to.equal(1);
  });

  it('test SUBTRACT one positive float and one negative float numbers', () => {
    expect(calculateNumber('SUBTRACT', 1, -2.6)).to.equal(4);
  });

  it('test SUBTRACT two zeros', () => {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
  });

  it('test DIVIDE two positive numbers', () => {
    expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
  });

  it('test DIVIDE two negative numbers', () => {
    expect(calculateNumber('DIVIDE', -6, -3)).to.equal(2);
  });

  it('test DIVIDE one positive and one negative numbers', () => {
    expect(calculateNumber('DIVIDE', 6, -3)).to.equal(-2);
  });

  it('test DIVIDE two positive float numbers', () => {
    expect(calculateNumber('DIVIDE', 6.2, 2.4)).to.equal(3);
  });

  it('test DIVIDE two negative float numbers', () => {
    expect(calculateNumber('DIVIDE', -6.2, -2.6)).to.equal(2);
  });

  it('test DIVIDE one positive float and one negative float numbers', () => {
    expect(calculateNumber('DIVIDE', 6.2, -2.4)).to.equal(-3);
  });

  it('test DIVIDE result float', () => {
    expect(calculateNumber('DIVIDE', 7.2, -2.4)).to.equal(-3.5);
  });

  it('test DIVIDE two zeros', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });

  it('test DIVIDE by zero', () => {
    expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
  });

  it('test DIVIDE by rounded zero', () => {
    expect(calculateNumber('DIVIDE', 6, 0.3)).to.equal('Error');
  });

  it('test DIVIDE with zero', () => {
    expect(calculateNumber('DIVIDE', 0, 6)).to.equal(0);
  });
});
