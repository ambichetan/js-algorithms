const TreeNode = require('../lib/TreeNode');
const BinaryTree = require('../lib/BinaryTree');

var treeToDoublyList = function (root) {
  if (!root) return root;
  return helper(root).head;
};

var helper = function (root) {
  if (!root) return null;

  const left = helper(root.left);

  const node = new TreeNode(root.value);
  node.right = node;
  node.left = node;

  let head = node;
  let tail = node;
  if (left) {
    left.tail.right = head;
    head.left = left.tail;

    left.head.left = tail;
    tail.right = left.head;
    head = left.head;
  }

  const right = helper(root.right);
  if (right) {
    tail.right = right.head;
    right.head.left = tail;

    right.tail.right = head;
    head.left = right.tail;
    tail = right.tail;
  }

  return {
    head: head,
    tail: tail
  }
};

const bt = new BinaryTree();
[4, 2, 5, 1, 3].forEach(value => bt.insert(value));

const result = treeToDoublyList(bt.root);
console.log(result);
