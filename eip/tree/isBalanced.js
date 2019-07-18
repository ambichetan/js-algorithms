const BinaryTree = require('../lib/BinaryTree');

const isBalanced = (root) => {
  if (!root) {
    return {
      height: 0,
      isBalanced: true
    };
  } else {
    const left = isBalanced(root.left);
    if (!left.isBalanced) {
      return {
        height: 0,
        isBalanced: false
      }
    }
    const right = isBalanced(root.right);
    if (!right.isBalanced) {
      return {
        height: 0,
        isBalanced: false
      }
    }
    return {
      height: 1 + Math.max(left.height, right.height),
      isBalanced: Math.abs(left.height - right.height) <= 1
    };
  }
};

const bt = new BinaryTree();
[3, 4, 5, 6, 7, 8, 9, 2, 1].forEach(value => bt.insertBST(value));
console.log(isBalanced(bt.root));
