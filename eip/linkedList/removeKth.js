const Node = require('../lib/Node');
const LinkedList = require('../lib/LinkedList');

const remoteKth = (l, k) => {
  const dummy = new Node();
  dummy.next = l.root;
  let r = dummy;
  let c = l.root;
  while (k) {
    c = c.next;
    k--;
  }
  while (c) {
    c = c.next;
    r = r.next;
  }
  r.next = r.next.next;
  return dummy.next;
};

const l = new LinkedList([1, 2, 3]);
l.root = remoteKth(l, 2);
console.log(l.print());
