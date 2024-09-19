const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('call and log the correct message', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleStub = sinon.stub(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(stub, 'SUM', 100, 20);

    sinon.assert.calledOnceWithExactly(consoleStub, 'The total is: 10');

    stub.restore();
    consoleStub.restore();
  });
});
