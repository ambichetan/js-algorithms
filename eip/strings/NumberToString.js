const numberToString = (number) => {
  // validate input
  if (!isValid(number)) {
    return 'error';
  }

  // 0
  if (number === 0) {
    return '0';
  }

  // calculate result
  let result = '';
  let isPositive = true;
  if (number < 0) {
    isPositive = false;
    number *= -1;
  }

  while (number) {
    result = (number % 10) + result;
    number = Math.floor(number / 10);
  }

  // return result
  return isPositive ? result : '-' + result;
};

const isValid = (number) => {
  // 0
  if (number === 0) {
    return true;
  }

  // null, undefined
  if (!number) {
    return false;
  }

  return true;
};

module.exports = numberToString;
