const chai = require('chai');
const expect = chai.expect;
const Stack = require('../Stack');

describe.only('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack(3);
  });

  describe('given empty stack', () => {
    it('should be empty', () => {
      expect(stack.isEmpty()).to.be.true;
    });
    it('should add first item', () => {
      stack.push(1);
      expect(stack.peek()).to.equal(1);
    });
    it('should pop first item', () => {
      stack.push(1);
      expect(stack.pop()).to.equal(1);
      expect(stack.peek()).to.be.undefined;
    });
    it('should throw error item', () => {
      expect(stack.pop).to.throw();
    });
    it('should not double the size', () => {
      stack.push(1);
      stack.push(1);
      stack.push(1);
      expect(stack.array.length).to.equal(3);
    });
    it('should double the size', () => {
      stack.push(1);
      stack.push(1);
      stack.push(1);
      stack.push(1);
      expect(stack.array.length).to.equal(6);
    });
  });
});
