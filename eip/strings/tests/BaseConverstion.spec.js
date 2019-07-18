const chai = require('chai');
const expect = chai.expect;
const baseConvertion = require('../BaseConvertion');

describe('baseConvertion', () => {
  describe('given input', () => {
    it('should return output', () => {
      expect(baseConvertion('aaa', 16, 10)).to.equal('2730');
      expect(baseConvertion('aaa', 16, 2)).to.equal('101010101010');
      expect(baseConvertion('abc', 16, 8)).to.equal('5274');
      expect(baseConvertion('267', 10, 8)).to.equal('413');
      expect(baseConvertion(null, 10, 8)).to.equal('error');
      expect(baseConvertion('123', 10, 18)).to.equal('error');
      expect(baseConvertion('', 2, 10)).to.equal('error');
    });
  });
});
