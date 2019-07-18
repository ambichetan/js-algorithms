const isPalindrome = (string) => {
  if (!string) {
    return true;
  } else {
    return string === string.split('').reverse().join('');
  }
}

const palindromeDecompHelper = (string, choosen, result) => {
  if (string.length === 0) {
    result.push([...choosen]);
  } else {
    for (let i = 1; i <= string.length; i++) {
      const choice = string.substring(0, i);
      if (isPalindrome(choice)) {
        choosen.push(choice); // choose
        palindromeDecompHelper(string.substring(i, string.length), choosen, result);
        choosen.pop(choice); //unchoose
      }
    }
  }
};

const palindromeDecomp = (string) => {
  const result = [];
  palindromeDecompHelper(string, [], result);
  return result;
};

console.log(palindromeDecomp('0204451881'));
