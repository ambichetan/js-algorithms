const BinaryTree = require('../lib/BinaryTree');
const Queue = require('../lib/Queue');

const isSymmetric = (root) => {
  if (!root) {
    return true;
  }
  return isSymmetricHelper(root.left, root.right);
}
const isSymmetricHelper = (left, right) => {
  if (left === null && right === null) {
    return true;
  }
  // !!! 
  else if (left !== null && right !== null) {
    return (left.value === right.value) && isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
  }
  return false;
};

const bt = new BinaryTree();
[1, 2, 2, 3, 4, 4, 3, 5].forEach(value => bt.insert(value));
bt.insertBST(5);
bt.printTree();
console.log(isSymmetric(bt.root));
