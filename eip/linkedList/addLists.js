const LinkedList = require('../lib/LinkedList');
const Node = require('../lib/Node');

const addLists = (l1, l2) => {
  if (!l1 && !l1.root) {
    return l2;
  } else if (!l2 && !l2.root) {
    return l1;
  } else {
    const result = new LinkedList();
    let c1 = l1.root;
    let c2 = l2.root;
    let carry = 0;
    while (c1 && c2) {
      carry = calculateValue(c1.value + c2.value + carry, result);
      c1 = c1.next;
      c2 = c2.next;
    }
    while (c1) {
      carry = calculateValue(c1.value + carry, result);
      c1 = c1.next;
    }
    while (c2) {
      carry = calculateValue(c2.value + carry, result);
      c2 = c2.next;
    }
    if (carry) {
      result.insertEnd(new Node(carry));
    }
    return result;
  }
};

const calculateValue = (value, list) => {
  let carry = Math.floor(value / 10);
  list.insertEnd(new Node(value % 10));
  return carry;
};

const l1 = new LinkedList([3, 2, 1]);
const l2 = new LinkedList([8, 7, 9]);
console.log(addLists(l1, l2).print());
