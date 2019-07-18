const Node = require('../lib/Node');
const LinkedList = require('../lib/LinkedList');

const rotateKth = (l, k) => {
  let r = l.root;
  let c = r;
  // TRICK
  k = k % l.size;
  while (k--) {
    c = c.next;
  }
  while (c.next) {
    c = c.next;
    r = r.next;
  }
  c.next = l.root;
  l.root = r.next;
  r.next = null;
};

const l = new LinkedList([1, 2, 3, 4, 5]);
rotateKth(l, 3);
console.log(l.print());
