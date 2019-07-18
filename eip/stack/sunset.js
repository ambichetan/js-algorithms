const Stack = require('../lib/Stack');

const sunset = (array) => {
  if (!array && array.length < 2) {
    return array;
  }
  const stack = new Stack();
  for (let i = array.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && array[i] >= stack.peek()) {
      stack.pop();
    }
    stack.push(array[i]);
  }
  const result = [];
  while (!stack.isEmpty() && result.push(stack.pop()));
  return result;
};
console.log(sunset([4, 6, 3, 5, 7]));
