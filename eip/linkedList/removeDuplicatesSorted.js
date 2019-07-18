const LinkedList = require('../lib/LinkedList');

const removeDuplicates = (list) => {
  let root = list.root;

  while (root) {
    if (root.next && root.value === root.next.value) {
      root.next = root.next.next;
    } else {
      root = root.next;
    }
  }
};

const l1 = new LinkedList([1, 2, 2, 3, 3]);
removeDuplicates(l1);
console.log(l1.print());

const l2 = new LinkedList([1, 2, 3, 4]);
removeDuplicates(l2);
console.log(l2.print());
