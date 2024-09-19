const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('using Stub', () => {
    const daStub = sinon.stub(Utils, 'calculateNumber');
    daStub.returns(10);
    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(daStub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledOnceWith('The total is: 10')).to.be.true;

    daStub.restore();
    logSpy.restore();
  });
});
