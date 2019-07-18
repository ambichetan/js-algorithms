// do it properly - https://www.studytonight.com/data-structures/circular-queue !!! not working currently

class CircularQueue {
  constructor() {
    this.SIZE = 4;
    this.front = -1;
    this.rear = -1;
    this.array = new Array(this.SIZE);
  }
  enqueue(item) {
    if (this.front === -1) this.front = 0;
    this.rear = (this.rear + 1) % this.SIZE;
    this.array[this.rear] = item;
  }
  dequeue() {
    if (this.isEmpty())
      throw Error('Queue is empty');
    else {
      this.front = (this.front + 1) % this.SIZE;
      return this.array[this.front];
    }
  }
  peek() {
    return this.array[this.front % this.SIZE];
  }
  isEmpty() {
    return this.front === this.rear;
  }
  print() {
    let string = '';
    let i;
    for (i = this.front; i !== this.rear; i = (i + 1) % this.SIZE) {
      string += this.array[i] + ',';
    }
    string += this.array[i];
    console.log(string);
  }
}

let cq = new CircularQueue();
cq.enqueue('a');
cq.enqueue('b');
cq.enqueue('c');
cq.enqueue('d');
cq.print();
cq.dequeue();
cq.print();
