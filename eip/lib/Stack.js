module.exports = class Stack {
  constructor(size) {
    this.array = new Array(size || 10);
    this.top = -1;
  }
  push(item) {
    if (this.top + 1 === this.array.length) {
      let tempArray = new Array(2 * this.array.length);
      let length = this.array.length;
      while (length--) {
        tempArray[length] = this.array[length];
      }
      this.array = tempArray;
    }
    this.array[++this.top] = item;
  }
  pop() {
    if (this.isEmpty())
      throw new Error('Stack is empty');
    else
      return this.array[this.top--];
  }
  peek() {
    return this.array[this.top];
  }
  display() {
    return this.array.toString();
  }
  isEmpty() {
    return this.top === -1;
  }
  size() {
    return this.top + 1;
  }
}
