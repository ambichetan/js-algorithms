const simpleMerge = (v1, end1, v2) => {
  if ((!v1 && !v2) || end1 > v1.length) {
    return 'error';
  } else if (!v1) {
    return v2;
  } else if (!v2) {
    return v1;
  }
  let i = end1;
  let j = v2.length - 1;
  let k = v1.length - 1;
  while (i >= 0 && j >= 0) {
    v1[k--] = v1[i] > v2[j] ? v1[i--] : v2[j--];
  }
  while (j >= 0) {
    v1[k--] = v2[j--];
  }
  return v1;
};

const v1 = new Array(5);
v1[0] = 6;
v1[1] = 7;
v1[2] = 8;
const v2 = [2, 4]
console.log(simpleMerge(v1, 2, v2));
