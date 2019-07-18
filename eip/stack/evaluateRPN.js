const Stack = require('../lib/Stack');

const evaluateRPN = (values) => {
  const stack = new Stack();
  values.forEach(value => {
    let sv = value.toString();
    if ('+-/*'.indexOf(sv) > -1) {
      let value1 = stack.pop();
      let value2 = stack.pop();
      switch (value) {
        case '+':
          stack.push(value2 + value1);
          break;
        case '-':
          stack.push(value2 - value1);
          break;
        case '/':
          stack.push(value2 / value1);
          break;
        case '*':
          stack.push(value2 * value1);
          break;
      }
    } else {
      stack.push(value);
    }
  });
  return stack.pop();
};

console.log(evaluateRPN([3, 4, '+']));
console.log(evaluateRPN([3, 4, '+', 2, '*', 1, '+']));
