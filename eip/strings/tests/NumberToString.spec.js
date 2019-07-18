const chai = require('chai');
const expect = chai.expect;
const numberToString = require('../numberToString');

describe('NumberToString', () => {
  describe('given number', () => {
    it('should return string', () => {
      expect(numberToString(0)).to.equal('0');
      expect(numberToString(123)).to.equal('123');
      expect(numberToString(-123)).to.equal('-123');
      expect(numberToString(undefined)).to.equal('error');
      expect(numberToString(null)).to.equal('error');
    });
  });
});
