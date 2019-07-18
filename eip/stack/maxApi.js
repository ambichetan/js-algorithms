const Stack = require('../lib/Stack');

const MaxStack = class {
  constructor() {
    this.stack = new Stack();
    this.maxStack = new Stack();
  }
  push(value) {
    this.stack.push(value);
    if (!this.maxStack.size()) {
      this.maxStack.push(value);
    } else if (value >= this.maxStack.peek()) {
      this.maxStack.push(value);
    }
  }
  pop() {
    const value = this.stack.pop();
    if (this.maxStack.peek() === value) {
      this.maxStack.pop();
    }
    return value;
  }
  max() {
    return this.maxStack.peek();
  }
};

const maxStack = new MaxStack();
console.log(maxStack.max());
maxStack.push(3);
console.log(maxStack.max());
maxStack.push(5);
console.log(maxStack.max());
maxStack.push(1);
console.log(maxStack.max());
maxStack.push(6);
console.log(maxStack.max());
maxStack.pop();
console.log(maxStack.max());
maxStack.pop();
console.log(maxStack.max());
maxStack.pop();
console.log(maxStack.max());
maxStack.pop();
console.log(maxStack.max());
