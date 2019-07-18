
const LinkedList = require('../lib/LinkedList');
const Node = require('../lib/Node');

const reverseLinkedListFromTo = (list, start, end) => {
  if (list.size > 0) {
    let dummyH = new Node();
    dummyH.next = list.root;
    let startPrev = dummyH;
    let startCur = list.root;
    let count = 1;
    while (count < start) {
      startPrev = startCur;
      startCur = startCur.next;
      count++;
    }
    let current = startCur;
    let prev = null;
    while (count <= end) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
    startPrev.next = prev;
    startCur.next = current;
    list.root = dummyH.next;
  }

  return list;
};

console.log(reverseLinkedListFromTo(new LinkedList([1, 2, 3, 4, 5, 6]), 2, 3).print()); 
