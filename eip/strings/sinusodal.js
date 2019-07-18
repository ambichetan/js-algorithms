const sinusodal = (text) => {
  if (!text) {
    return 'error';
  }

  const result = [];
  for (let i = 1; i < text.length; i = i + 4) {
    result.push(text.charAt(i));
  }
  for (let i = 0; i < text.length; i = i + 2) {
    result.push(text.charAt(i));
  }
  for (let i = 3; i < text.length; i = i + 4) {
    result.push(text.charAt(i));
  }

  return result.join('');
}

console.log(sinusodal('hello world'));
console.log(sinusodal('hel'));
console.log(sinusodal('he'));
console.log(sinusodal('h'));
