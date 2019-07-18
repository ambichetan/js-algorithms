const LinkedList = require('../lib/LinkedList');

const checkPalindrome = (list) => {
  if (!list.root) {
    return false
  } else if (!list.root.next) {
    return true;
  } else {
    // find middle
    let slow = list.root;
    let fast = slow;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let rightHead = slow.next;
    slow.next = null;

    // reverse list
    rightHead = reverseList(rightHead);

    // compare
    let root = list.root;
    let right = rightHead;
    let isPalindrome = true;
    while (root && right) {
      if (root.value !== right.value) {
        isPalindrome = false;
        break;
      } else {
        root = root.next;
        right = right.next;
      }
    }

    rightHead = reverseList(rightHead);
    slow.next = rightHead;

    return isPalindrome;
  }
};

const reverseList = (root) => {
  if (!root && !root.next) {
    return root;
  } else {
    let prev = null;
    let cur = root;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }
}

const l = new LinkedList([1, 2]);
console.log(l.print());
console.log(checkPalindrome(l));
console.log(l.print());
