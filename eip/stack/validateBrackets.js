const Stack = require('../lib/Stack');

const validateBrackets = (string) => {
  if (!string) {
    return true;
  } else {
    const stack = new Stack();
    for (let char of string.split('')) {
      if ('({['.indexOf(char) !== -1) {
        stack.push(char);
      } else {
        let popped;
        if (stack.isEmpty()) {
          return false;
        } else {
          popped = stack.pop();
        }
        if ((popped !== '(' && char === ')') ||
          (popped !== '{' && char === '}') ||
          (popped !== '[' && char === ']'))
          return false;
      }
    }
    return stack.isEmpty();
  }
}
console.log(validateBrackets('(())'));
console.log(validateBrackets('([]{()}[])'));
console.log(validateBrackets('([(])'));
console.log(validateBrackets('('));
console.log(validateBrackets(')'));
