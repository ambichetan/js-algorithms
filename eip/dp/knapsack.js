const knapsackTB = (items, w) => {
  const dp = new Array(items.length);
  for (let i = 0; i < w; i++) dp[i] = new Array(w);
  return helper(items, 0, w, dp);
};

const helper = (items, i, w, dp) => {
  if (i === items.length || w === 0) {
    return 0;
  }
  if (dp[i][w] !== undefined) return dp[i][w];
  let max = 0;
  max = Math.max(max, helper(items, i + 1, w, dp));
  if (w - items[i].w >= 0) {
    max = Math.max(max, helper(items, i + 1, w - items[i].w, dp) + items[i].v);
  }
  return max;
};

// !!! remember to create items + 1 and w + 1 array as needed 
// !!! and then look for i-1 of item inside
const knapsackBU = (items, w) => {
  // old way of array fill
  // const dp = Array(items.length + 1);
  // for (let i = 0; i < items.length + 1; i++) dp[i] = Array(w + 1).fill(0);

  const dp = Array(items.length + 1).fill().map(() => Array(w + 1).fill(0))

  for (let i = 1; i < items.length + 1; i++) {
    for (let j = 1; j < w + 1; j++) { // !!! this is also needed
      if (items[i - 1].w > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][w], dp[i - 1][j - items[i - 1].w] + items[i - 1].v);
      }
    }
  }

  return dp[items.length][w];
};

const result = knapsackBU([{
    w: 2,
    v: 6
  },
  {
    w: 2,
    v: 10
  },
  {
    w: 3,
    v: 12
  }
], 5);
console.log(result);
