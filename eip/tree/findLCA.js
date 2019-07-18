const BinaryTree = require('../lib/BinaryTree');

const findLCA = (root, v1, v2) => {
  if (!root) {
    return {
      lca: null,
      count: 0
    }
  }
  const left = findLCA(root.left, v1, v2);
  if (left.count === 2) {
    return left;
  }
  const right = findLCA(root.right, v1, v2);
  if (right.count === 2) {
    return right;
  }
  const count = left.count + right.count + (root.value === v1 ? 1 : 0) + (root.value === v2 ? 1 : 0);
  return {
    lca: count === 2 ? root.value : null,
    count
  }
};


// Non-efficient version - try to think it terms or RECURSION - kept for reference 
//
// const findLCA = (root, v1, v2) => {
//   if (!root) {
//     return {
//       lca: null,
//       count: 0
//     }
//   }
//   const left = findLCA(root.left, v1, v2);
//   if (left.count === 2) {
//     return {
//       lca: left.lca,
//       count: 2
//     }
//   }
//   const right = findLCA(root.right, v1, v2);
//   if (right.count === 2) {
//     return {
//       lca: right.lca,
//       count: 2
//     }
//   }
//   const count = left.count + right.count;
//   if (count === 2) {
//     return {
//       lca: root.value,
//       count: 2
//     }
//   }
//   if (root.value === v1 || root.value === v2) {
//     const count = 1 + left.count + right.count;
//     if (count === 2) {
//       return {
//         lca: root.value,
//         count: 2
//       }
//     } else {
//       return {
//         lca: null,
//         count: count
//       }
//     }
//   }
//   return {
//     lca: null,
//     count: left.count + right.count
//   }
// };

const bt = new BinaryTree();
[4, 2, 6, 1, 3, 5, 7].forEach(value => bt.insertBST(value));
bt.printTree();
console.log(findLCA(bt.root, 5, 7));
