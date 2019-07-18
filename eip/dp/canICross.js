var canCrossIte = function (stones) {
  const cache = Array(stones.length).fill('').map(() => Array(stones.length).fill(false));
  cache[0][0] = true;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (cache[i][j] === true) {
        let jumps;
        if (i === 0) {
          jumps = [1];
        } else {
          jumps = [j - 1, j, j + 1]
        }
        for (let jump of jumps) {
          const nextIndex = getValidStep(stones, i, jump);
          if (nextIndex !== -1) {
            cache[nextIndex][jump] = true;
          }
        }
      }
    }
  }

  return cache[stones.length - 1].some(value => value);
};

var canCrossRec = function (stones) {
  const cache = Array(stones.length).fill('').map(() => Array(stones.length).fill(-1));
  return helper(stones, 0, 0, cache);
};

var helper = function (stones, index, lastStep, cache) {
  if (index === stones.length - 1) {
    return true;
  } else {
    if (cache[index][lastStep] !== -1) {
      return cache[index][lastStep];
    }
    let jumps;
    if (index === 0) {
      jumps = [1];
    } else {
      jumps = [lastStep - 1, lastStep, lastStep + 1]
    }
    let result = false;
    for (let jump of jumps) {
      const nextIndex = getValidStep(stones, index, jump);
      if (nextIndex !== -1 && helper(stones, nextIndex, jump, cache)) {
        result = true;
        break;
      }
    }
    cache[index][lastStep] = result;
    return result;
  }
};


var getValidStep = function (stones, index, k) {
  let nextStep = index + 1;
  while (stones[index] + k >= stones[nextStep] && nextStep < stones.length) {
    if (stones[index] + k === stones[nextStep]) {
      return nextStep;
    }
    nextStep++;
  }
  return -1;
}

console.log(canCrossIte([0, 1, 3, 5, 6, 8, 12, 17]));
console.log(canCrossRec([0, 1, 3, 5, 6, 8, 12, 17]));
console.log(canCrossIte([0, 1, 2, 3, 4, 8, 9, 11]));
console.log(canCrossRec([0, 1, 2, 3, 4, 8, 9, 11]));
