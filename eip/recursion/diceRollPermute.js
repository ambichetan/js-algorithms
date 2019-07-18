const diceRollPermuteHelper = (d, prefix) => {
  if (d === 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i <= 6; i++) {
      diceRollPermuteHelper(d - 1, prefix + i);
    }
  }
};

const diceRollPermute = (d) => {
  diceRollPermuteHelper(d, '');
};

diceRollPermute(3);
