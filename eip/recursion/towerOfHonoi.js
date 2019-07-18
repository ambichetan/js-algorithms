const towerOfHonoiHelper = (n, source, temp, dest, result) => {
  if (n > 0) {
    towerOfHonoiHelper(n - 1, source, dest, temp, result);
    result.push(n + ' ' + source + ' -> ' + dest);
    towerOfHonoiHelper(n - 1, temp, source, dest, result);
  }
};

const towerOfHonoi = (n) => {
  const result = [];
  towerOfHonoiHelper(n, 'S', 'T', 'D', result);
  console.log(result.length);
  console.log(result);
};

towerOfHonoi(2);
