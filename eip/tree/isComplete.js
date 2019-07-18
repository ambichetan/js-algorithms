const BinaryTree = require('../lib/BinaryTree');
const Queue = require('../lib/Queue');

const isComplete = (root) => {
  if (!root) {
    return true;
  }
  const queue = new Queue();
  queue.enqueue(root);
  let isEmptyChild = false;

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    // left
    if (current.left) {
      if (isEmptyChild) {
        return false;
      } else {
        queue.enqueue(current.left);
      }
    } else {
      isEmptyChild = true;
    }

    // right
    if (current.right) {
      if (isEmptyChild) {
        return false;
      } else {
        queue.enqueue(current.right);
      }
    } else {
      isEmptyChild = true;
    }
  }
  return true;
};

const bt = new BinaryTree();
[4, 2, 6, 1, 3, 5].forEach(value => bt.insertBST(value));
console.log(isComplete(bt.root));
