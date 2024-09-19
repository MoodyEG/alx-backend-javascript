const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber and log the result', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledOnceWith('The total is: 120')).to.be.true;

    spy.restore();
    logSpy.restore();
  });
});
