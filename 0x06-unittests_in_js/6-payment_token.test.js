const getPaymentTokenFromAPI = require('./6-payment_token')
const expect = require('chai').expect

describe('getPaymentTokenFromAPI', () => {
  it('should return a promise with true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.have.property('data');
        done();
      })
      .catch(done);
  });
});
