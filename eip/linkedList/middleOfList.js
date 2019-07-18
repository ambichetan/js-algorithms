const LinkedList = require('../lib/LinkedList');
const Node = require('../lib/Node');

const middleOfList = (list) => {
  if (!list || list.size === 0) return null;
  let slow = list.root;
  let fast = list.root;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const l = new LinkedList([2, 4, 5, 3, 6, 1]);
console.log(l.print());
console.log(middleOfList(l).value);
