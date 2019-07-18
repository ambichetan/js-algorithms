module.exports = class TreeNode {
  constructor(value, parent = null, left = null, right = null, size = 0) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.size = size;
    this.parent = parent;
  }
};
