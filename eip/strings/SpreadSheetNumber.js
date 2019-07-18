const spreadSheetNumber = (string) => {
  // validate
  if (!isValid(string)) {
    return 'error';
  }

  // caclulate
  let result = 0;
  string.split('').forEach(char => {
    result = result * 26 + char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  });

  //return
  return result;
};

const isValid = (string) => {
  let isValid = true;
  // null, empty, undefined
  if (!string) {
    isValid = false;
  }

  return isValid;
};

console.log(spreadSheetNumber('ZZ'));
