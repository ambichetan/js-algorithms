const Stack = require('../lib/Stack');

const normalizePath = (path) => {
  if (!path) {
    return path;
  } else {
    const stack = new Stack();
    let isRelative = path.charAt(0) === '/';
    for (let name of path.split('/')) {
      if (name === '..') {
        if (stack.isEmpty()) {
          return 'error';
        }
        stack.pop();
      } else if (!name || name === '.') {
        //nothing
      } else {
        stack.push(name);
      }
    };
    let remaining = [];
    while (!stack.isEmpty()) {
      remaining.push(stack.pop());
    }
    return (isRelative ? '/' : '') + remaining.reverse().join('/');
  }
};

console.log(normalizePath('/hello/.././hi'));
console.log(normalizePath('hello/.././hi'));
console.log(normalizePath('/usr/lib/../bin/gcc'));
console.log(normalizePath('//./../scripts/awkscripts/././'));
console.log(normalizePath('//'));
console.log(normalizePath('../../..'));
console.log(normalizePath('/usr/bin/.././../tgy'));
