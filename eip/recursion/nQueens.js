// matrix.length - row count
// matrix[0].length - column count
let count = 0;

const isSafe = (matrix, index) => {
  // check row
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[index.i][j]) {
      return false;
    }
  }

  // check column
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][index.j]) {
      return false;
    }
  }

  // increasing diagonal - \
  let i = index.i;
  let j = index.j;
  while (i < matrix.length && j < matrix[0].length) {
    if (matrix[i++][j++]) {
      return false;
    }
  }

  // decreasing diagonal - \
  i = index.i;
  j = index.j;
  while (i >= 0 && j >= 0) {
    if (matrix[i--][j--]) {
      return false;
    }
  }

  // increasing diagonal - /
  i = index.i
  j = index.j
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i--][j++]) {
      return false;
    }
  }

  // decreasing diagonal - /
  i = index.i
  j = index.j
  while (i < matrix.length && j >= 0) {
    if (matrix[i++][j--]) {
      return false;
    }
  }

  return true;
};

const print = (matrix) => {
  var waitTill = new Date(new Date().getTime() + 500);
  while (waitTill > new Date()) {}
  console.log('\033c');
  console.log(matrix);
}

const nQueensHelper = (matrix, column) => {
  if (column === matrix[0].length) {
    count++;
  } else {
    // columns cells are choices
    for (let i = 0; i < matrix.length; i++) {
      const index = {
        i,
        j: column
      };
      if (isSafe(matrix, index)) {
        matrix[i][column] = 1;
        print(matrix);
        nQueensHelper(matrix, column + 1);
        matrix[i][column] = 0;
        print(matrix);
      }
    }
  }
};

const nQueens = (n) => {
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  nQueensHelper(matrix, 0);
};

nQueens(8);
console.log(count);
