// TODO: Not done

const Stack = require('../lib/Stack');

const sortStack = (stack) => {

};

const stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(5);
const result = [];
while (!stack.isEmpty() && result.push(stack.pop()));
console.log(result);
