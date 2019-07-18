const chai = require('chai');
const expect = chai.expect;
const stringToNumber = require('../StringToNumber');

describe('StringToNumber', () => {
  describe('given string', () => {
    it('should return number', () => {
      expect(stringToNumber('123')).to.equal(123);
      expect(stringToNumber('-123')).to.equal(-123);
      expect(stringToNumber('0')).to.equal(0);
      expect(stringToNumber('')).to.equal('NAN');
      expect(stringToNumber(undefined)).to.equal('NAN');
      expect(stringToNumber(null)).to.equal('NAN');
      expect(stringToNumber('--123')).to.equal('NAN');
    });
  });
});
