const LinkedList = require('../lib/LinkedList');

const reverseLinkedList = (list) => {
  if (list === null) return list;
  let prev = null;
  let cur = list.root;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  list.root = prev;
  return list;
};

const list = new LinkedList([1, 2, 3, 4, 5]);
reverseLinkedList(list);

console.log(list.print());
