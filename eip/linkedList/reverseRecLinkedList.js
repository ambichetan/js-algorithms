const LinkedList = require('../lib/LinkedList');

const reverseRecLinkedList = (root) => {
  if (root === null || root.next === null) {
    return root;
  } else {
    let returnHead = reverseRecLinkedList(root.next);
    root.next.next = root;
    root.next = null;
    return returnHead;
  }
};

const ll = new LinkedList([1, 2, 3, 4, 5]);
ll.root = reverseRecLinkedList(ll.root);
console.log(ll.print());
