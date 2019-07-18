// choose and unchoose are still similar to decimalPermutation even though by reference
// cons - we have to do with before without
// cons - we have to add back the decision

const subsetHelper = (initialSet, choosenSet, indent) => {
  // console.log(indent, 'subsetHelper', initialSet, choosenSet);
  if (initialSet.size === 0) {
    console.log(indent, choosenSet);
  } else {
    const decision = [...initialSet][0];
    initialSet.delete(decision);

    // choice - with
    choosenSet.add(decision);
    subsetHelper(initialSet, choosenSet, indent + '  ');

    choosenSet.delete(decision); // unchoose

    // choice - without
    subsetHelper(initialSet, choosenSet, indent + '  ');

    // shit - just to make reference work
    initialSet.add(decision);
  }
};

const subset = (set) => {
  subsetHelper(set, new Set(), '  ');
};

subset(new Set([1, 2, 3]));
