const Node = require('../lib/Node');
const LinkedList = require('../lib/LinkedList');

const removeEmpty = (lists) => lists.filter(list => list.root);

const interleaveMultipleLists = (lists) => {
  const resultList = new LinkedList();
  while (lists.size > 0) {
    resultList
  }
};

const lists = new LinkedList();
lists.insertEnd(new LinkedList([1, 3, 5]));
lists.insertEnd(new LinkedList([2, 4]));
lists.insertEnd(new LinkedList([6, 7, 8, 9, 10]));
lists.root = interleaveMultipleLists(lists);
console.log(lists.print());
