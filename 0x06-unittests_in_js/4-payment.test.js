/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('payment testing', () => {
  it('should call Utils.calculateNumber and log the correct message', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(stub.calledOnceWith('SUM', totalAmount, totalShipping)).to.be.true;

    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
