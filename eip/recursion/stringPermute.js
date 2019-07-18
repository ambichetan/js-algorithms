const stringPermuteHelper = (string, permute) => {
  if (string.length === 0) {
    console.log(permute);
  } else {
    for (let i = 0; i < string.length; i++) {
      let newString = string.substring(0, i) + string.substring(i + 1, string.length);
      stringPermuteHelper(newString, permute + string[i]);
    }
  }
};

const stringPermute = (string) => {
  stringPermuteHelper(string, '');
};

stringPermute('abc');
