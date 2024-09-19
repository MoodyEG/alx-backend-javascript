const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const sendPaymentRequestToApi = require('./3-payment');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
