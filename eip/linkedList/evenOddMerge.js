const Node = require('../lib/Node');
const LinkedList = require('../lib/LinkedList');

const evenOddMerge = (l) => {
  if (l.size > 2) {
    let op = l.root;
    let ep = l.root.next;
    let sep = ep;
    while (op.next && ep.next) {
      op.next = ep.next;
      op = ep.next;
      ep.next = op.next;
      ep = op.next;
    }
    op.next = sep;
  }
};

const l = new LinkedList([1, 2, 3]);
evenOddMerge(l);
console.log(l.print());
