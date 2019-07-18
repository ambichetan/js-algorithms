const helper = (array, index, choosen) => {
  if (index === array.length) {
    console.log(choosen);
  } else {
    helper(array, index + 1, choosen); // without
    choosen.push(array[index]); // with
    helper(array, index + 1, choosen);
    choosen.pop(); // unchoose
  }
};

const subset = (array) => {
  helper(array, 0, []);
};

subset([1, 2, 3, 4, 5]);
