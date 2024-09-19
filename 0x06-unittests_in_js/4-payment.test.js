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

    expect(daStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(daStub.callCount).to.be.equal(1);
    expect(logSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(logSpy.log.callCount).to.be.equal(1);

    daStub.restore();
    logSpy.restore();
  });
});
