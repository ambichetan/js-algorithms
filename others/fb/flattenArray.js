const input = [1, 2, [3, 4, [5, 6, 7], 8, 9], 10, 11, [12, 13], 14];

const flatten = (arr) => {
  let result = [];
  arr.forEach(item => {
    // if(Array.isArray(item)) {
    //   result = result.concat(flatten(item));
    // } else {
    //   result.push(item); 
    // }
    Array.isArray(item) ? result.push(...flatten(item)) : result.push(item); 
  });
  return result;
};

console.log(flatten(input));
