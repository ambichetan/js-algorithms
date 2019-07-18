const insertionSort = (values) => {
  if (!values || values.length < 2) {
    return values;
  } else {
    for (let i = 1; i < values.length; i++) { // !!!
      let j = i - 1
      const item = values[i];
      while (j >= 0 && values[j] > item) {
        values[j + 1] = values[j--];
      }
      values[j + 1] = item;
    }
  }
  return values;
}

console.log(insertionSort([3, 4, 1, 2, 5, 7, 8, 6]));
console.log(insertionSort([1, 2, 1]));
console.log(insertionSort([2, 2, 1]));
console.log(insertionSort([]));
console.log(insertionSort());
console.log(insertionSort([4, 3, 2, 1]));
console.log(insertionSort([1, 1, 1, 1, 1]));
