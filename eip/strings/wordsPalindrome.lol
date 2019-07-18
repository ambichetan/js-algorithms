const wordsPalindrome = (text) => {
  // validate input
  if(!isValid(text)) {
    return 'error';
  }

  // calculate
  text = text.split('');
  let i = 0;
  let j = text.length - 1;
  while (i < j) {
    while (!isAlpNum(text[i]) && i < j) {
      i++;
    } 
    while (!isAlpNum(text[j]) && i < j) {
      j--;
    }
    if(text[i] !== text[j]) {
      return false;
    }
    i++;
    j--;
  }

  //return
  return i < j;
};

const isAlpNum = (char) => {
  const charCode = char.charCodeAt(0);
  return 'a' <= charCode && charCode <= 'z' 
    && 'A' <= charCode && charCode <= 'Z' 
    && '0' <= charCode && charCode <= '9';
};

const isValid = (text) => {
  // null, undefined, empty
  return !!text;
};
