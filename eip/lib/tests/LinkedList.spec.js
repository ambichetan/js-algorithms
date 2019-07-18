const chai = require('chai');
const expect = chai.expect;
const Node = require('../Node');
const LinkedList = require('../LinkedList');

describe.only('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList(['a', 'b', 'c', 'd', 'e']);
  });

  it('should be constructed', () => {
    expect(linkedList.print()).to.be.equal('a->b->c->d->e');
  });
  it('should insert front', () => {
    linkedList.insertFront(new Node('f'));
    expect(linkedList.print()).to.be.equal('f->a->b->c->d->e');
    linkedList.deleteAll();
    linkedList.insertFront(new Node('f'));
    expect(linkedList.print()).to.be.equal('f');
  });
  it('should insert end', () => {
    linkedList.insertEnd(new Node('f'));
    expect(linkedList.print()).to.be.equal('a->b->c->d->e->f');
    linkedList.deleteAll();
    linkedList.insertEnd(new Node('f'));
    expect(linkedList.print()).to.be.equal('f');
  });
  it('should insert at', () => {
    linkedList.insertAt(1, new Node('f'));
    expect(linkedList.print()).to.be.equal('f->a->b->c->d->e');
    linkedList.insertAt(6, new Node('f'));
    expect(linkedList.print()).to.be.equal('f->a->b->c->d->f->e');
    linkedList.insertAt(8, new Node('f'));
    expect(linkedList.print()).to.be.equal('f->a->b->c->d->f->e->f');
    linkedList.deleteAll();
    linkedList.insertAt(1, new Node('f'));
    expect(linkedList.print()).to.be.equal('f');
  });
  it('should delete front', () => {
    linkedList.deleteFront();
    expect(linkedList.print()).to.be.equal('b->c->d->e');
    linkedList.deleteAll();
    linkedList.insertAt(1, new Node('f'));
    linkedList.deleteFront();
    expect(linkedList.print()).to.be.equal('');
  });
  it('should delete end', () => {
    linkedList.deleteEnd();
    expect(linkedList.print()).to.be.equal('a->b->c->d');
    linkedList.deleteAll();
    linkedList.insertAt(1, new Node('f'));
    linkedList.deleteEnd();
    expect(linkedList.print()).to.be.equal('');
  });
  it('should delete at', () => {
    linkedList.deleteAt(1);
    expect(linkedList.print()).to.be.equal('b->c->d->e');
    linkedList.deleteAt(4);
    expect(linkedList.print()).to.be.equal('b->c->d');
    linkedList.deleteAt(2);
    expect(linkedList.print()).to.be.equal('b->d');
  });
  it('should delete node', () => {
    linkedList.deleteAll();
    linkedList = new LinkedList(['b', 'a', 'a', 'a']);
    expect(linkedList.print()).to.be.equal('b->a->a->a');
    linkedList.deleteNode(new Node('a'));
    expect(linkedList.print()).to.be.equal('b');
    linkedList = new LinkedList(['a', 'a', 'a']);
    linkedList.deleteNode(new Node('a'));
    expect(linkedList.print()).to.be.equal('');
    linkedList = new LinkedList(['a']);
    linkedList.deleteNode(new Node('a'));
    expect(linkedList.print()).to.be.equal('');
    linkedList = new LinkedList(['a', 'a', 'a', 'b']);
    linkedList.deleteNode(new Node('a'));
    expect(linkedList.print()).to.be.equal('b');
  });
  it('should find middle', () => {
    expect(linkedList.findMiddle()).to.be.equal('c');
    linkedList.deleteNode(new Node('c'));
    expect(linkedList.findMiddle()).to.be.equal('b');
  });
  it('should reverse', () => {
    linkedList.reverse();
    expect(linkedList.print()).to.be.equal('e->d->c->b->a');
  });
  it('should reverse from to', () => {
    linkedList.reverseFromTo(2, 4);
    expect(linkedList.print()).to.be.equal('a->d->c->b->e');
    linkedList.reverseFromTo(3, 5);
    expect(linkedList.print()).to.be.equal('a->d->e->b->c');
  });
});
