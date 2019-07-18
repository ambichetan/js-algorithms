const Stack = require('../lib/Stack');
const JumpNode = require('../lib/JumpNode');

const jumpListRec = (head, order) => {
  if (head && head.order === -1) {
    head.order = order;
    let newOrder = jumpListRec(head.jump, order + 1);
    newOrder = jumpListRec(head.next, newOrder + 1);
    return newOrder;
  }
  return order;
};

const jumpListIte = (head, order) => {
  let stack = new Stack();
  stack.push(head);
  while (!stack.isEmpty()) {
    let current = stack.pop();
    if (current && current.order === -1) {
      current.order = order++;
      stack.push(current.next);
      stack.push(current.jump);
    }
  }
};


let a = new JumpNode('a');
let b = new JumpNode('b');
let c = new JumpNode('c');
let d = new JumpNode('d');
a.next = b;
b.next = c;
c.next = d;
d.next = null;
a.jump = c;
b.jump = d;
c.jump = b;
d.jump = d;
// jumpListRec(a, 0);
jumpListIte(a, 0);
let cur = a;
let result = [];
while (cur) {
  result.push(cur.order);
  cur = cur.next;
}
console.log(result.join('->'));
console.log('0->2->1->3')
