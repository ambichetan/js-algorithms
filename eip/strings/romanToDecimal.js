const mapping = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToDecimal = (string) => {
  // validate - null, undefined, empty string
  if (!string) {
    return 'error';
  }

  // iterate and calculate
  let result = string.charAt(string.length - 1);
  for (let i = string.length - 2; i >= 0; i--) {
    if (mapping[string[i]] < mapping[string[i + 1]]) {
      result -= mapping[string[i]];
    } else {
      result += mapping[string[i]];
    }
  }

  // return result;
  return result;
};

console.log(romanToDecimal('VII'));
console.log(romanToDecimal('XXIV'));
console.log(romanToDecimal('VIV'));
