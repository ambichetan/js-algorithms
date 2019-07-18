const mergeSort = (values) => {
  mergeSortHelper(values, 0, values.length - 1);
  return values;
}

const mergeSortHelper = (values, start, end) => {
  if (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    mergeSortHelper(values, start, mid);
    mergeSortHelper(values, mid + 1, end);
    simpleMerge(values, start, mid, end);
  }
}

const simpleMerge = (values, start, mid, end) => {
  const result = [];
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    const valI = values[i];
    const valJ = values[j];
    if (valI < valJ) {
      result.push(valI);
      i++;
    } else {
      result.push(valJ);
      j++;
    }
  }
  while (i <= mid) {
    result.push(values[i++]);
  }
  while (j <= end) {
    result.push(values[j++]);
  }
  let k = start;
  for (let val of result) {
    values[k++] = val;
  }
};

// console.log(mergeSort([3, 2, 4, 1, 5, 6, 8, 9, 7]));
// console.log(mergeSort([1, 2, 1]));
// console.log(mergeSort([2, 2, 1]));
// console.log(mergeSort([]));
// console.log(mergeSort([4, 3, 2, 1]));
// console.log(mergeSort([1, 1, 1, 1, 1]));

module.exports = mergeSort;

// !! Old not working version
// const mergeSort = (values) => {
//   return mergeSortHelper(values, 0, values.length);
// }

// const mergeSortHelper = (values, start, end) => {
//   if (start < end) {
//     const mid = Math.floor((end - start) / 2);
//     mergeSortHelper(values, start, mid);
//     mergeSortHelper(values, mid, end); !!!
//     simpleMerge(values, start, mid, end);
//   }
// }

// const simpleMerge = (values, start, mid, end) => {
//   const result = [];
//   let i = start;
//   let j = mid; !!!
//   while (i < mid && j < end) {
//     const valI = values[i++]; !!!
//     const valJ = values[j++]; !!!
//     result.push(valI < valJ ? valI : valJ);
//   }
//   while (i < mid) {
//     result.push(values[i++]);
//   }
//   while (j < end) {
//     result.push(values[j++]);
//   }
//   let k = start;
//   for (let val of result) {
//     values[k++] = val;
//   }
// };
