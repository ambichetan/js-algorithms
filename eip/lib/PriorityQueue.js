
// WRONG one in the bottom
// Concept: https://www.cs.bgu.ac.il/~ds122/wiki.files/Presentation09.pdf 

class PrioriyQueue {
  constructor(comparator) {
    this.array = [];
    this.comparator = comparator;
  }
  enqueue(item) {
    this.array.push(item);
    this.increaseKey(this.array.length - 1);
  }
  dequeue() {
    if (this.isEmpty())
      throw Error('Queue is empty');
    else {
      const item = this.array[0];
      this.array[0] = this.array[this.array.length - 1];
      this.array.pop();
      this.heapify(0, this.array.length);
      return item;
    }
  }
  heapify(index, j) {
    let array = this.array;
    let i = index;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left <= j && this.comparator(array[i], array[left]) > 0) i = left;
    if (right <= j && this.comparator(array[i], array[right]) > 0) i = right;
    if (i !== index) {
      this.swap(i, index);
      this.heapify(i, j);
    }
  }
  increaseKey(i) {
    let array = this.array;
    let parent = Math.floor((i - 1) / 2);
    while (parent >= 0 && this.comparator(array[parent], array[i]) > 0) {
      this.swap(parent, i);
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }
  swap(i, j) {
    let array = this.array;
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
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
  print() {
    console.log(this.array);
  }
}

const prioriyQueue = new PrioriyQueue((a, b) => (a - b) >= 0);
[2, 4, 3, 1, 8, 5, 6].forEach(value => {
  prioriyQueue.enqueue(value);
  prioriyQueue.print();
});
prioriyQueue.dequeue();
prioriyQueue.print();
prioriyQueue.dequeue();
prioriyQueue.print();



//wrong
// const hipify = () => {
    /// Correct one: https://www.cs.bgu.ac.il/~ds122/wiki.files/Presentation09.pdf 
    // !!! WRONG. Doing for all the n/2 elements
    // !!! go from n/2 to 0, since n/2 to end are leaf nodes since it's a complete binary tree
    // for (let i = Math.floor(this.size() / 2 - 1); i >= 0; i--) {
    //   const leftChild = 2 * i + 1;
    //   const rightChild = 2 * i + 2;
    //   if ((leftChild < this.size()) && (this.comparator(this.array[i], this.array[leftChild]) > -1)) {
    //     [this.array[i], this.array[leftChild]] = [this.array[leftChild], this.array[i]];
    //   }
    //   if ((rightChild < this.size()) && (this.comparator(this.array[i], this.array[rightChild]) > -1)) {
    //     [this.array[i], this.array[rightChild]] = [this.array[rightChild], this.array[i]];
    //   }
    // }
// };
