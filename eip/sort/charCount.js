const mergeSort = require('./mergeSort');

const charCountLookAhead = (string) => {
  if (!string) {
    return 'error';
  }
  const sortedString = mergeSort(string.split('')).join('');
  const result = [];
  let count = 1;
  let i;
  for (i = 0; i < sortedString.length - 1; i++) {
    if (sortedString[i] === sortedString[i + 1]) {
      count++;
    } else {
      result.push(sortedString[i] + ' ' + count);
      count = 1;
    }
  }
  result.push(sortedString[i] + ' ' + count);
  console.log(result);
}

const charCountLookBack = (string) => {
  if (!string) {
    return 'fuck you';
  }
  const sortedString = mergeSort(string.split('')).join('');
  const result = [];
  let count = 1;
  let i;
  for (i = 1; i < sortedString.length; i++) {
    if (sortedString[i] === sortedString[i - 1]) {
      count++;
    } else {
      result.push(sortedString[i - 1] + ' ' + count);
      count = 1;
    }
  }
  result.push(sortedString[i - 1] + ' ' + count);
  console.log(result);
}

charCountLookAhead('acbcaghi');
charCountLookBack('acbcaghi');
