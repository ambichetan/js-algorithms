//TODO: Not complete

const Stack = require('../lib/Stack');


const BSTSorted = (tree) => {
  if (!tree[0]) {
    return [];
  } else {
    const stack = new Stack();
    const visited = [];
    stack.push(tree[0]);
    while (stack.isEmpty()) {
      const root = stack.pop();
      if (!visited.includes(root) && haha) {

      }
    }
  }
}
console.log(BSTSorted([43, 23, 47, 0, 37, 0, 53, 0, 0, 29, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31]));
