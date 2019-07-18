const binaryPermuteHelper = (n, prefix) => {
  if (n === 0) {
    console.log(prefix);
  } else {
    // choices for one decision
    binaryPermuteHelper(n - 1, prefix + '0');
    binaryPermuteHelper(n - 1, prefix + '1');
  }
};
const binaryPermute = (n) => {
  binaryPermuteHelper(n, '');
};

binaryPermute(3);
