const mapping = {
  2: ['a','b','c'],
  3: ['d','e','f'],
  4: ['g','h','i'],
  5: ['j','k','l'],
  6: ['m','n','o'],
  7: ['p','q','r','s'],
  8: ['t','u','v'],
  9: ['w','x','y','z']
}

const phoneNumberToString = (number) => {
  // validate
  if(!number) {
    return 'error';
  }

  //calculate 
  let result = [];
  helper(number, 0, '', result);
  return result;
};

const helper = (number, index, prefix, result) => {
  //base case
  if(index === number.length) {
    result.push(prefix);
  } else { 
    mapping.get(number[index]).forEach((char) => {
      helper (number, index + 1, prefix + char, result);
    });
  }
};
