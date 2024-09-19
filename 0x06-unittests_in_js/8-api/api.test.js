const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  it('should return 200 status code', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return Welcome to the payment system', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
