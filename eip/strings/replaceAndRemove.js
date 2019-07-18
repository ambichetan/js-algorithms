const replaceAndRemove = (array) => {
  if (!isValid(array)) {
    //validate
    return 'error';
  }

  // special cases
  let newLength = array.reduce((acc, value) => {
    return value === 'a' ? acc + 2 : (value === 'b' ? acc - 1 : acc + 1);
  });

  const newArray = new Array(newLength);
  for (let i = array.length; i > 0; i--) {
    if (array[i] === 'a') {
      newArray[newLength--] = 'd';
      newArray[newLength--] = 'd';
    } else if (array[i] === 'b') {
      //nothing
    } else {
      newArray[newLength--] = array[i];
    }
  }

  // return result
  return newArray;
};

const isValid = array => true;

console.log(replaceAndRemove(['a', 'b', 'a', 'c']));
