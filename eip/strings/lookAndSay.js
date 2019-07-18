const lookAndSay = (level) => {
  // validate - null, undefined, empty, 0, string
  if (!Number(level)) {
    return 'error';
  }

  // calculate
  let result = '1';
  while (level > 1) {
    let count = 1;
    let tempResult = '';
    for (let i = 0; i < result.length; i++) {
      if (result.charAt(i) === result.charAt(i + 1)) {
        count++;
      } else {
        tempResult = tempResult + count + result.charAt(i);
        count = 1;
      }
    }
    result = tempResult;
    level--;
  }

  // return
  return result;
};

console.log(lookAndSay());
