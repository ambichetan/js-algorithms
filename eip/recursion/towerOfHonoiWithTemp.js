const towerOfHonoiWithTempHelper = (n, source, temp, dest, result) => {
  if (n > 0) {
    towerOfHonoiWithTempHelper(n - 1, source, temp, dest, result);
    result.push(n + ' ' + source + ' -> ' + temp);
    towerOfHonoiWithTempHelper(n - 1, dest, temp, source, result);
    result.push(n + ' ' + temp + ' -> ' + dest);
    towerOfHonoiWithTempHelper(n - 1, source, temp, dest, result);
  }
};

const towerOfHonoiWithTemp = (n) => {
  const result = [];
  towerOfHonoiWithTempHelper(n, 'S', 'T', 'D', result);
  console.log(result.length);
  console.log(result);
};

towerOfHonoiWithTemp(2);
