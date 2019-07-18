const selectionSort = (values) => {
  for (let i = 0; i < values.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < values.length; j++) {
      if (values[min] > values[j]) {
        min = j;
      }
    }
    [values[i], values[min]] = [values[min], values[i]];
  }
  return values;
}

console.log(selectionSort([3, 4, 2, 7, 1, 6, 9, 8, 5]));
console.log(selectionSort([1, 2, 1]));
console.log(selectionSort([2, 2, 1]));
console.log(selectionSort([]));
console.log(selectionSort([4, 3, 2, 1]));
