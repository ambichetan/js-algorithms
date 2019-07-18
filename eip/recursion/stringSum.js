const parseValue = (string) => {
  let stringSum = Number(string[0]);
  let i = 1;
  while (i < string.length) {
    const opt = string[i];
    if (opt === '+') {
      stringSum += Number(string[++i]);
    } else if (opt === '-') {
      stringSum -= Number(string[++i]);
    }
    i++;
  }
  return stringSum;
};

const stringSumHelper = (string, sum, choosen, result) => {
  if (string.length === 0) {
    if (parseValue(choosen) === sum) {
      result.push([...choosen]);
    }
  } else {
    for (let i = 1; i <= string.length; i++) {
      const nextString = string.substring(i, string.length);

      // choice 1
      choosen.push(string.substring(0, i));
      nextString && choosen.push('+');

      stringSumHelper(nextString, sum, choosen, result);

      if (nextString) {
        // unchoose
        choosen.pop();

        // choice 2
        choosen.push('-');
        stringSumHelper(nextString, sum, choosen, result);

        // unchoose
        choosen.pop();
      }
      // unchoose
      choosen.pop();
    }
  }
};

const stringSum = (string, sum) => {
  const result = [];
  stringSumHelper(string, sum, [], result);
  console.log(result);
};

stringSum('12345', 51);
