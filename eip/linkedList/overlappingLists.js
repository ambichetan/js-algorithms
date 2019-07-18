const LinkedList = require('../lib/LinkedList');

const overlappingLists = (l1, l2) => {
  let r1 = l1.root;
  let r2 = l2.root;
  let diff = Math.abs(l1.size - l2.size);
  while (diff) {
    if (l1.size > l2.size) {
      r1 = r1.next;
    } else {
      r2 = r2.next;
    }
    diff--;
  }
  while (r1 !== null && r2 !== null) {
    if (r1.value === r2.value) {
      return r1.value;
    }
    r1 = r1.next;
    r2 = r2.next;
  }
  return null;
};

const l1 = new LinkedList([1]);
const l2 = new LinkedList([]);
console.log(overlappingLists(l1, l2));
