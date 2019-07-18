/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

var mergeTrees = function (t1, t2) {
  if (t1 === null)
    return t2;
  if (t2 === null)
    return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};


// !!! Think only about the root node. Not about left and right
// var mergeTrees = function (t1, t2) {
//   if (t1 && t2) return null;
//   let root;
//   if (t1) {
//     t1.value = t1.val + (t2 ? t2.val : 0);
//     root = t1;
//   } else {
//     root = t2;
//   }
//   root.left = mergeTrees(t1 && t1.left, t2 && t2.left);
//   root.right = mergeTrees(t1 && t1.right, t2 && t2.right);
//   return root;
// };
