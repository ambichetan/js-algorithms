const LNRSS = (string) => {
  const ascii = {};
  const charString = string.split('');
  let max = 0;
  for (let i = 0, j = 0; i < charString.length; i++) {
    const char = charString[i];
    if (ascii[char]) {
      j = i;
    }
    ascii[char] = true;
    max = Math.max(max, (i - j) + 1);
  }
  return max;
};

console.log(LNRSS("abcbdefgh"));
console.log(LNRSS("aaa"));
console.log(LNRSS("abcabc"));
