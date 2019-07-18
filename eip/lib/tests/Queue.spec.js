const chai = require('chai');
const expect = chai.expect;
const Queue = require('../Queue');

describe.only('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('given empty queue', () => {
    it('should be empty', () => {
      expect(queue.isEmpty()).to.be.true;
    });
    it('should enqueue first item', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).to.equal(1);
    });
    it('should dequeue first item', () => {
      queue.enqueue(1);
      expect(queue.dequeue()).to.equal(1);
      expect(queue.peek()).to.be.undefined;
    });
    it('should throw error item', () => {
      expect(queue.dequeue).to.throw();
    });
  });
});
