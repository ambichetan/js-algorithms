const interSectSorted = (v1, v2) => {
  if (!v1 || !v2) {
    return [];
  }
  const result = [];
  let i = 0;
  let j = 0;
  while (i < v1.length && j < v2.length) {
    if (v1[i] > v2[j]) {
      j++;
    } else if (v1[i] < v2[j]) {
      i++;
    } else {
      result.push(v1[i]);
      i++;
      j++;
    }
  }
  return result;
}

console.log(interSectSorted([1, 2, 3, 4], [2, 4, 5, 6, 7]));
