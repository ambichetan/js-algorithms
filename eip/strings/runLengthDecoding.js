const runLengthDecoding = (text) => {
  if (!text && text.length < 2) {
    return 'error';
  }

  // calculate
  const result = [];
  for (let i = 0; i < text.length; i = i + 2) {
    let count = text.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
    while (count) {
      result.push(text.charAt(i + 1));
      count--;
    };
  }

  return result.join('');
};

console.log(runLengthDecoding('2a2b'));
console.log(runLengthDecoding('1a1b1c'));
console.log(runLengthDecoding('4a'));
console.log(runLengthDecoding('4a1b3c2a'));
