// choose and unchoose are similar to decimalPermutation

const subsetHelper = (initialSet, choosenSet) => {
  if (initialSet.size === 0) {
    console.log(choosenSet);
  } else {
    const decision = [...initialSet][0];
    initialSet.delete(decision);

    // without
    subsetHelper(new Set([...initialSet]), new Set([...choosenSet]));

    // with
    choosenSet.add(decision);
    subsetHelper(new Set([...initialSet]), new Set([...choosenSet]));
  }
};

const subset = (set) => {
  subsetHelper(set, new Set());
};

subset(new Set([1, 2, 3]));
