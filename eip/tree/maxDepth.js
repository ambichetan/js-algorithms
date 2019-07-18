/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  return helper(root);
};

const helper = (root) => {
  if (root === null) return 0;
  return 1 + Math.max(helper(root.left), helper(root.right));
  // !!! return Math.max(1 + helper(root.left), 1 + helper(root.right));
};
