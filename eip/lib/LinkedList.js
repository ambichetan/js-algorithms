'use strict';

const Node = require('../lib/Node');

class LinkedList {
  constructor(values) {
    this.root = null;
    this.size = 0;
    values && this.insertAll(values);
  }
  insertAll(values) {
    values.forEach((value) => {
      this.insertEnd(new Node(value));
    });
  }
  insertFront(node) {
    if (this.size === 0) {
      this.root = node;
    } else {
      node.next = this.root;
      this.root = node;
    }
    this.size++;
  }
  insertEnd(node) {
    if (this.size === 0) {
      this.root = node;
    } else {
      let current = this.root;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAt(index, node) {
    if (index === 1) {
      this.insertFront(node);
    } else if (index > this.size) {
      this.insertEnd(node);
    } else {
      let current = this.root;
      while (index > 2) {
        current = current.next;
        index--;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }
  deleteFront() {
    if (this.size > 0) {
      this.root = this.root.next;
      this.size--;
    }
  }
  deleteEnd() {
    if (this.size > 0) {
      if (this.size === 1) {
        this.deleteFront();
      } else {
        let current = this.root;
        while (current.next.next !== null) {
          current = current.next;
        }
        current.next = current.next.next;
        this.size--;
      }
    }
  }
  deleteAt(index) {
    if (this.size > 0) {
      if (index === 1) {
        this.deleteFront();
      } else if (index > this.size) {
        this.deleteEnd();
      } else {
        let current = this.root;
        while (index > 2) {
          current = current.next;
          index--;
        }
        current.next = current.next.next;
        this.size--;
      }
    }
  }
  deleteNode(node) {
    if (this.size > 1) {
      let prev = this.root;
      let current = this.root.next;
      while (current !== null) {
        if (current.value === node.value) {
          prev.next = current.next;
          current = current.next;
          this.size--;
        } else {
          prev = current;
          current = current.next;
        }
      }
      if (this.root.value === node.value) {
        this.root = this.root.next;
        this.size--;
      }
    } else {
      if (this.size === 1 && this.root.value === node.value) {
        this.root = null;
        this.size--;
      }
    }
  }
  findMiddle() {
    if (this.size > 0) {
      let slow = this.root;
      let fast = this.root;
      while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow.value;
    } else {
      return null;
    }
  }
  print() {
    let current = this.root;
    let result = '';
    if (this.size > 0) {
      while (current.next !== null) {
        result = result + current.value + '->';
        current = current.next;
      }
      result = result + current.value;
    }
    // console.log(result);
    return result;
  }
  deleteAll() {
    if (this.size > 0) {
      let current = this.root;
      let prev = null;
      while (current !== null) {
        prev = current;
        current = current.next;
        prev.next = null;
      }
      this.root = null;
      this.size = 0;
    }
  }
  reverse() {
    if (this.size > 0) {
      if (this.size === 1) {
        return;
      } else {
        let prev = null;
        let current = this.root;
        while (current !== null) {
          let next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        this.root = prev;
      }
    }
  }
  reverseFromTo(start, end) {
    if (this.size > 0) {
      let startPrev = null;
      let startCur = this.root;
      let count = 1;
      while (count < start) {
        startPrev = startCur;
        startCur = startCur.next;
        count++;
      }
      let current = startCur;
      let prev = startPrev;
      while (count <= end) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
      }
      startPrev.next = prev;
      startCur.next = current;
    }
  }
}

module.exports = LinkedList;
