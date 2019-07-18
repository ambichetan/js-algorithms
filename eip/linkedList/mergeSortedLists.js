const Node = require('../lib/Node');
const LinkedList = require('../lib/LinkedList');

const mergeSortedLists = (list1, list2) => {
  let root1 = list1.root;
  let root2 = list2.root;
  const dummyRoot = new Node();
  let current = dummyRoot;
  while (root1 !== null && root2 !== null) {
    if (root1.value < root2.value) {
      current.next = root1;
      root1 = root1.next;
    } else {
      current.next = root2;
      root2 = root2.next;
    }
    current = current.next;
  }
  current.next = root1 == null ? root2 : root1;
  return dummyRoot.next;
};

const ll = new LinkedList();
ll.root = mergeSortedLists(new LinkedList([1, 3, 5]), new LinkedList([2, 4]));
ll.size = 5;
console.log(ll.print());
