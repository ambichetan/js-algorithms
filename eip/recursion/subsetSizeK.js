const subsetHelper = (initialSet, choosenSet, k) => {
  if (k === 0) {
    console.log(choosenSet);
  } else if (initialSet.size > 0) {
    const decision = [...initialSet][0];
    initialSet.delete(decision);

    // choice - with
    choosenSet.add(decision);
    subsetHelper(initialSet, choosenSet, k - 1);

    choosenSet.delete(decision); // unchoose

    // choice - without
    subsetHelper(initialSet, choosenSet, k);

    // shit - just to make reference work
    initialSet.add(decision);
  }
};

const subsetSizeK = (n, k) => {
  const initialSet = new Set();
  for (let i = 1; i <= n; i++) {
    initialSet.add(i);
  }
  subsetHelper(initialSet, new Set(), k);
};

subsetSizeK(3, 2);
