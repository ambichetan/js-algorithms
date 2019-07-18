const quickSort = (values) => {
  quickSortHelper(values, 0, values.length - 1);
  return values;
}

const quickSortHelper = (values, start, end) => {
  if (start < end) {
    const pivot = getPivotFromLast(values, start, end);
    quickSortHelper(values, start, pivot - 1);
    quickSortHelper(values, pivot + 1, end);
  }
}

// !!! when you swap <pivot,j>, pivot needs to be swapped with larger number. we do j+1 since 
// j is at smaller number position.
const getPivotFromLast = (values, start, end) => {
  let pivot = end;
  let i = start;
  let j = end - 1;
  while (i <= j) {
    if (values[i] > values[pivot]) {
      [values[i], values[j]] = [values[j], values[i]];
      j--;
    } else {
      i++;
    }
  }
  [values[pivot], values[j + 1]] = [values[j + 1], values[pivot]];
  return j + 1;
};

// !!! when you swap <pivot,j>, pivot needs to be swapped with smaller number. we do j since 
// j is at smaller number position.
// PREFERRED
const getPivotFromFirst = (values, start, end) => {
  let pivot = start;
  let i = start + 1;
  let j = end;
  while (i <= j) {
    if (values[i] > values[pivot]) {
      [values[i], values[j]] = [values[j], values[i]];
      j--;
    } else {
      i++;
    }
  }
  [values[pivot], values[j]] = [values[j], values[pivot]];
  return j;
};


// !!! before fixing issues
// const quickSort = (values) => {
//   quickSortHelper(values, 0, values.length - 1);
//   return values;
// }

// const quickSortHelper = (values, start, end) => {
//   if (start < end) {
//     const pivot = getPivot(values, start, end); 
//     quickSortHelper(values, start, pivot); !!!
//     quickSortHelper(values, pivot + 1, end);
//   }
// 

// const getPivot = (values, start, end) => {
//   let pivot = end;
//   let i = start;
//   let j = end - 1;
//   while (i < j) { !!!
//     if (values[i] > values[pivot]) {
//       [values[i], values[j]] = [values[j], values[i]];
//       j--;
//     } else {
//       i++;
//     }
//   }
//   [values[pivot], values[j]] = [values[j], values[pivot]]; !!!
//   return j; !!!
// };

console.log(quickSort([3, 4, 1, 2, 5, 7, 8, 6]));
console.log(quickSort([1, 2, 1]));
console.log(quickSort([2, 2, 1]));
console.log(quickSort([]));
console.log(quickSort([4, 3, 2, 1]));
console.log(quickSort([1, 1, 1, 1, 1]));
