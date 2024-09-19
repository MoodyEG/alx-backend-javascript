const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('using Stub', () => {
    const daStub = sinon.stub(Utils, 'calculateNumber');
    const logSpy = sinon.spy(console, 'log');
    daStub.returns(10);

    const res = sendPaymentRequestToApi(100, 20);

    expect(daStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    expect(Utils.calculateNumber('SUM', 100, 20)).to.be.equal(res);

    daStub.restore();
    logSpy.restore();
  });
});
