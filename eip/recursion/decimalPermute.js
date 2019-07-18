const decimalPermuteHelper = (n, prefix) => {
  if (n === 0) {
    console.log(prefix.join(''));
  } else {
    for (let i = 0; i <= 9; i++) {
      prefix.push(i)
      decimalPermuteHelper(n - 1, prefix);
      prefix.pop();
    }
  }
};

const decimalPermute = (n) => {
  decimalPermuteHelper(n, []);
};

decimalPermute(6);
