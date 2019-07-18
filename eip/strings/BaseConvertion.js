const baseConverstion = (string, b1, b2) => {
  //validate inputs
  if (!isValid(string, b1, b2)) {
    return 'error';
  }

  //special cases

  //convert b1 to decimal
  let decimalValue = 0;
  string.split('').forEach(char => {
    const charCode = char.toUpperCase().charCodeAt(0);
    decimalValue = (decimalValue * b1) + ((charCode > '9'.charCodeAt(0)) ? (10 + (charCode - 'A'.charCodeAt(0))) :
      (charCode - '0'.charCodeAt(0)));
  });


  //convert decimal to  b2
  let result = '';
  if (b2 === 10) {
    result = String(decimalValue);
  } else {
    while (decimalValue) {
      const modulo = decimalValue % b2;
      const nextChar = modulo > 10 ? String.fromCharCode('a'.charCodeAt(0) + modulo - 10) : modulo;
      result = nextChar + result;
      decimalValue = Math.floor(decimalValue / b2);
    }
  }

  //return result
  return result;
};

const isValid = (string, b1, b2) => {
  let isValid = true;
  // empty, null, undefined
  if (!string) {
    isValid = false;
  } else if (!(2 <= b1 && b1 <= 16 && 2 <= b2 && b2 <= 16)) {
    isValid = false;
  }
  return isValid;
};

module.exports = baseConverstion;
