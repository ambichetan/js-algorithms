const bubbleSort = (values) => {
  const length = values.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        [values[j], values[j + 1]] = [values[j + 1], values[j]]
      }
    }
  }
  return values;
}

console.log(bubbleSort([3, 4, 2, 7, 1, 6, 9, 8, 5]));
console.log(bubbleSort([1, 2, 1]));
console.log(bubbleSort([2, 2, 1]));
console.log(bubbleSort([]));
console.log(bubbleSort([4, 3, 2, 1]));
