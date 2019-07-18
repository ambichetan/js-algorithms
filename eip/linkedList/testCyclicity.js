const LinkedList = require('../lib/LinkedList');

const testCyclicity = (root) => {
  if (root === null) {
    return null;
  } else {
    let slow = root;
    let fast = root;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast.value === slow.value) {
        fast = root;
        break;
      }
    }
    if (fast.next !== null) {
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return fast.value;
    } else {
      return null;
    }
  }
};

const ll = new LinkedList([1, 2, 3, 4, 5]);
ll.root.next.next.next.next.next = ll.root.next;
testCyclicity(ll.root);
console.log(testCyclicity(ll.root));

const ll2 = new LinkedList([1, 2, 3, 4, 5]);
testCyclicity(ll2.root);
console.log(testCyclicity(ll2.root));
