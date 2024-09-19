const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber and log the result', () => {
    const daStub = sinon.stub(Utils, 'calculateNumber');
    daStub.returns(10);
    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(daStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledWith('The total is: 10')).to.be.true;

    daStub.restore();
    logSpy.restore();
  });

  it('should throw an error if Utils.calculateNumber throws an error', (done) => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.throws(new Error('Fake error'));

    try {
      sendPaymentRequestToApi(100, 20);
    } catch (error) {
      expect(error.message).to.equal('Fake error');
    }

    stub.restore();
    done();
  });
});
