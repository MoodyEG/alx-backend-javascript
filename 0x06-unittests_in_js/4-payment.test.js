const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('payment testing', () => {
  it('call and log the correct message', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;

    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
