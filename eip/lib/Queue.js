module.exports = class Queue {
  constructor() {
    this.array = [];
  }
  enqueue(item) {
    this.array.push(item);
  }
  dequeue() {
    if (this.isEmpty())
      throw Error('Queue is empty');
    else
      return this.array.shift();
  }
  peek() {
    return this.array[0];
  }
  isEmpty() {
    return this.array.length === 0;
  }
  size() {
    return this.array.length;
  }
}
