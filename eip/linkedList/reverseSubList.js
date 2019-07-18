const LinkedList = require('../lib/LinkedList');

const reverseSubList = (list, start, end) => {
  list.reverseFromTo(start, end);
};

const ll = new LinkedList([1, 2, 3, 4, 5, 6]);
reverseSubList(ll, 2, 5);
console.log(ll.print());
