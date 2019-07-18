const stringToNumber = (string) => {
  //validate input
  if (!isValid(string)) {
    return "NAN";
  }

  // calculate result
  const isNegative = string.charAt(0) === '-';
  let result = 0;
  for (let i = isNegative ? 1 : 0; i < string.length; i++) {
    result = result * 10 + (string.charAt(i) - '0');
  }

  // return result
  return isNegative ? result * -1 : result;
};

const isValid = (string) => {
  //null, undefined, epmty
  if (!string) {
    return false;
  }

  // more than one -
  if (string.split('').filter(char => char === '-').length > 1) {
    return false;
  };

  return true;
};

module.exports = stringToNumber;
