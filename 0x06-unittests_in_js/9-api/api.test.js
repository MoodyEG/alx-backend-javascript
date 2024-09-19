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

describe('Cart page', () => {
  it('should return 200 status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/1', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/abc', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return Payment methods for cart <id>', (done) => {
    request.get('http://localhost:7865/cart/1', (err, res) => {
      expect(res.body).to.equal('Payment methods for cart 1');
      done();
    });
  });

  it('should return Payment methods for cart <id>', (done) => {
    request.get('http://localhost:7865/cart/2', (err, res) => {
      expect(res.body).to.equal('Payment methods for cart 2');
      done();
    });
  });
});
