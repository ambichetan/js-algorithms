const LinkedList = require('../lib/LinkedList');
const ListNode = require('../lib/Node');

var sortList = function (head) {
  if (!head) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let prev1 = dummy;
  let cur1 = dummy.next;
  let prev2 = head;
  let cur2 = head.next;
  while (cur2) {
    let next = cur2.next;
    prev2.next = next;
    while (cur1.value < cur2.value) {
      prev1 = cur1;
      cur1 = cur1.next;
      if (prev1 === prev2) {
        prev2 = cur2;
        break;
      }
    }
    prev1.next = cur2;
    cur2.next = cur1;
    cur2 = next;
    prev1 = dummy;
    cur1 = dummy.next;
  }
  return dummy.next;
};

const ll = new LinkedList([4, 2, 1, 3]);
let head = sortList(ll.root);
while (head) {
  console.log(head.value);
  head = head.next;
}
