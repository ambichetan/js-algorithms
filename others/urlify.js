const urlifyFunc = (urlText) => {
  let pointer = 0;
  const length = urlText.length;
  const urlArray = urlText.split('');
  console.log('Before: ', urlText);

  while (pointer < length) {
    if (urlArray[pointer] === ' ') {
      for (let i = length - 1; i > pointer + 2; i--) {
        urlArray[i] = urlArray[i - 2];
      }
      urlArray[pointer] = '%';
      urlArray[pointer + 1] = '2';
      urlArray[pointer + 2] = '0';

    }
    pointer++;
  }
  console.log('After: ', urlArray.join(''));
};

module.exports = urlifyFunc;
