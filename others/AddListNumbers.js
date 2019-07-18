function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(0);
  let cur = dummyHead;
  let carry = 0;
  while (l1 || l2 || carry) {
    let value = 0;
    if (l1) {
      value += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      value += l2.val;
      l2 = l2.next;
    }
    if (carry) {
      value += carry;
    }
    cur.next = new ListNode(value % 10);
    cur = cur.next;
    carry = Math.floor(value / 10);
  }

  return dummyHead.next;
};
