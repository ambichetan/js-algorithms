const TreeNode = require('../lib/TreeNode');
const Queue = require('../lib/Queue');
const Stack = require('../lib/Stack');

class BinaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      this.size++;
    } else {
      const queue = new Queue();
      queue.enqueue(this.root);
      while (!queue.isEmpty()) {
        const node = queue.dequeue();
        if (!node.left) {
          node.left = new TreeNode(value, node);
          this.size++;
          break;
        } else if (!node.right) {
          node.right = new TreeNode(value, node);
          this.size++;
          break;
        } else {
          queue.enqueue(node.left);
          queue.enqueue(node.right);
        }
      }
    }
  }
  insertBST(value) {
    this.insertBSTIte(value);
  }
  insertBSTIte(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      this.size++;
    } else {
      let parent = null;
      let current = this.root;
      while (current) {
        parent = current;
        if (value <= current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        }
      }
      if (value <= parent.value) {
        parent.left = new TreeNode(value, parent);
      } else {
        parent.right = new TreeNode(value, parent);
      }
      this.size++;
    }
  }
  // TODO: 
  insertBSTRec(value) {

  }
  // TODO: 
  delete(value) {

  }
  deleteBST(value) {
    return this.deleteBSTIte(value);
  }
  // !!! 
  deleteBSTIte(value) {
    if (!this.root) {
      return false;
    }

    let parent = null;
    let current = this.root;
    while (current && current.value !== value) {
      parent = current;
      current = value < current.value ? current.left : current.right;
    }

    if (!current) {
      return false;
    }

    if (current.right) {
      let rCurrent = current.right;
      let rParent = current;
      while (rCurrent.left) {
        rParent = rCurrent;
        rCurrent = rCurrent.left;
      }
      current.value = rCurrent.value;
      // !!!
      if (rParent.left === rCurrent) {
        rParent.left = rCurrent.right;
      } else {
        rParent.right = rCurrent.right;
      }
    } else {
      if (this.root.value === value) {
        this.root = this.root.left;
      } else {
        // !!!
        if (parent.left === current) {
          parent.left = current.left;
        } else {
          parent.right = current.left;
        }
      }
    }

    return true;

    // if (current) {
    //   // !!! non efficient way I wrote first.
    //   // Keep it for reference

    //   if (current.left && current.right) {
    //     ...
    //   } else if (current.left) {
    //     if (value < parent.value) {
    //       parent.left = current.left;
    //     } else {
    //       parent.right = current.left;
    //     }
    //   } else if (current.right) {
    //     if (value < parent.value) {
    //       parent.left = current.right;
    //     } else {
    //       parent.right = current.right;
    //     }
    //   } else {
    //     if (value < parent.value) {
    //       parent.left = null;
    //     } else {
    //       parent.right = null;
    //     }
    //   }
    // }
  }
  // TODO: 
  deleteBSTRec() {

  }
  deleteAll() {
    this.deleteAllHelper(this.root);
    this.root = null;
  }
  deleteAllHelper(root) {
    if (root) {
      let left = root.left;
      let right = root.right;
      root.left = null;
      root.right = null;
      this.size--;
      this.deleteAllHelper(left);
      this.deleteAllHelper(right);
    }
  }
  find(value) {
    return this.findHelper(this.root, value);
  }
  findHelper(root, value) {
    if (root === null) {
      return false;
    } else if (root.value === value) {
      return true;
    } else {
      return this.findHelper(root.left, value) || this.findHelper(root.right, value);
    }
  }
  findBST(value) {
    return this.findBSTRec(this.root, value);
  }
  findBSTRec(root, value) {
    if (root === null) return false;
    else if (root.value === value) return true;
    else {
      return this.findBSTRec(value < root.value ? root.left : root.right, value);
    }
  }
  printTree() {
    if (!this.root) return;

    const result = [];
    const queue = new Queue();
    let count = 1;
    queue.enqueue(this.root);

    while (true) {
      let row = [];
      while (count-- > 0) {
        let node = queue.dequeue();
        row.push(node.value);
        queue.enqueue(node.left ? node.left : new TreeNode('_', node, new TreeNode('_'), new TreeNode('_')));
        queue.enqueue(node.right ? node.right : new TreeNode('_', node, new TreeNode('_'), new TreeNode('_')));
      }
      result.push(row.join(' '));
      count = queue.size();
      if (!count || queue.array.every(node => node.value === '_')) {
        break;
      }
    }

    console.log(result.join('\n'));
  }
  inOrder() {
    this.inOrderIte();
  }
  // !!! do with current, not with current.left
  inOrderIte() {
    const result = [];
    const stack = new Stack();
    let current = this.root;
    while (current || !stack.isEmpty()) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        result.push(current.value);
        current = current.right;
      }
    }
    console.log('inOrderIte:', result.join(','));
  }
  inOrderRec() {
    const result = [];
    this.inOrderRecHelper(this.root, result);
    console.log('inOrderRec:', result.join(','));
  }
  inOrderRecHelper(root, result) {
    if (root) {
      this.inOrderRecHelper(root.left, result);
      result.push(root.value);
      this.inOrderRecHelper(root.right, result);
    }
  }
  postOrder() {
    this.postOrderRec();
  }
  postOrderIte() {
    const result = [];
    if (this.root) {
      const stack = new Stack();
      stack.push(this.root);
      while (!stack.isEmpty()) {
        let current = stack.pop();
        result.unshift(current.value);
        if (current.left) {
          stack.push(current.left);
        }
        if (current.right) {
          stack.push(current.right);
        }
      }
    }
    console.log('postOrderIte:', result.join(','));
  }
  postOrderRec() {
    const result = [];
    this.postOrderRecHelper(this.root, result);
    console.log('postOrderRec:', result.join(','));
  }
  postOrderRecHelper(root, result) {
    if (root) {
      this.postOrderRecHelper(root.left, result);
      this.postOrderRecHelper(root.right, result);
      result.push(root.value);
    }
  }
  preOrder() {
    this.preOrderIte();
  }
  // !!!
  preOrderIte() {
    const result = [];
    const stack = new Stack();
    let current = this.root;
    while (current || !stack.isEmpty()) {
      if (current) {
        result.push(current.value);
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        current = current.right;
      }
    }
    console.log('preOrderIte:', result.join(','));
  }
  preOrderRec() {
    const result = [];
    this.preOrderRecHelper(this.root, result);
    console.log('preOrderRec:', result.join(','));
  }
  preOrderRecHelper(root, result) {
    if (root) {
      result.push(root.value);
      this.preOrderRecHelper(root.left, result);
      this.preOrderRecHelper(root.right, result);
    }
  }
  height(root) {
    return this.heightHelper(this.root);
  }
  heightHelper(root) {
    if (!root) {
      return 0;
    } else {
      return 1 + Math.max(this.heightHelper(root.left), this.heightHelper(root.right));
    }
  }
  countLeaves() {
    return this.countLeavesHelper(this.root, 0);
  }
  countLeavesHelper(root, count) {
    if (!root) {
      return 0;
    }
    if (!root.left && !root.right) return 1;
    return this.countLeavesHelper(root.left) + this.countLeavesHelper(root.right);
  }
  width() {
    const height = this.height();  
    const result = new Array(height + 1).join('0').split('');
    this.widthHelper(this.root, height - 1, result);
    return result.sort().reverse()[0];
  }
  widthHelper(root, height, result) {
    if (root) {
      result[height] = Number(result[height]) + 1;
      this.widthHelper(root.left, height - 1, result);
      this.widthHelper(root.right, height - 1, result);
    }
  }
  diameter() { // longest path between two leaves
    return this.diameterHelp(this.root);
  }
  diameterHelp(root) {
    if (!root) {
      return 0;
    } else {
      // with
      const len1 = this.heightHelper(root.left) + this.heightHelper(root.right) + 1;
      // without
      const len2 = Math.max(this.diameterHelp(root.left), this.diameterHelp(root.right));
      return Math.max(len1, len2);
    }
  }
  isEmpty() {
    return !this.size;
  }
};

module.exports = BinaryTree;


// test 
const bt = new BinaryTree();
[6, 3, 8, 2, 7, 9].forEach(value => bt.insertBST(value));
// bt.printTree();
bt.postOrder()
bt.postOrderIte()
// console.log('size:', bt.height());
// console.log('countLeaves:', bt.countLeaves());
// console.log('width:', bt.width());
// console.log('diameter:', bt.diameter());
