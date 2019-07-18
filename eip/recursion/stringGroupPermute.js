const stringGroupPermuteHelper = (groups, prefix, result) => {
  if (groups.length === 0) {
    result.push(prefix);
  } else {
    for (let i = 0; i < groups.length; i++) {
      const choice = groups[i];
      const remaining = groups.slice(0, i).concat(groups.slice(i + 1, groups.length));
      for (let j = 0; j < choice.length; j++) {
        stringGroupPermuteHelper(remaining, prefix + choice[j], result);
      }
    }
  }
};

const stringGroupPermute = (groups) => {
  const result = [];
  stringGroupPermuteHelper(groups, '', result);
  console.log(result.length);
};

stringGroupPermute(['ac', 'de', 'gh']);
