const reverseWords = (text) => {
  // null, empty, null
  if(!text) {
    return 'error';
  }

  // calculate
  const reversedText = reverse(text);
  const reversedWords = reversedText.split(' ').map(word => reverse(word));

  // return
  return reversedWords;
};

const reverse = (string) => string.split('').reverse().join('');
