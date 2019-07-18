const LinkedList = require('../lib/LinkedList');
const Node = require('../lib/Node');

const pivoting = (list, pivot) => {
  if (!list && !list.root && !list.root.next) {
    return;
  } else {
    const dl = new Node();
    const de = new Node();
    const dg = new Node();
    let dlt = dl;
    let det = de;
    let dgt = dg;
    let root = list.root;
    while (root) {
      if (root.value > pivot) {
        dgt.next = root;
        dgt = dgt.next;
      } else if (root.value < pivot) {
        dlt.next = root;
        dlt = dlt.next;
      } else {
        det.next = root;
        det = det.next;
      }
      root = root.next;
    }
    dlt.next = de.next;
    det.next = dg.next;
    dgt.next = null;
    return dl.next;
  }
};

const l = new LinkedList([2, 4, 5, 3, 6, 1]);
console.log(l.print());
l.root = pivoting(l, 3);
console.log(l.print());
