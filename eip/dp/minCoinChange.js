const minCoinChangeTB = (coins, sum) => {
  return helper(coins, sum, []);
};

const minCoinChangeBU = (coins, sum) => {
  const dp = Array(sum);
  dp[0] = 0;
  for (let i = 1; i <= sum; i++) {
    let min = Infinity;
    for (let coin of coins) {
      if (i - coin >= 0) {
        min = Math.min(min, 1 + dp[i - coin]);
      }
    }
    dp[i] = min;
  }
  return dp[sum];
};

// no global state
// no tail recursion
// no unncecessary attributes
const helper = (coins, sum, dp) => {
  if (sum === 0) {
    return 0;
  }
  if (dp[sum]) return dp[sum];
  let min = Infinity;
  for (let coin of coins) {
    if (sum - coin >= 0) {
      min = Math.min(min, 1 + helper(coins, sum - coin, dp));
    }
  }
  dp[sum] = min;
  return min;
};

// !!!! no unncecessary attributes
// const helper = (coins, sum, count) => {
//   if (sum === 0) {
//     return count;
//   }
//   let min = Infinity;
//   for (let coin of coins) {
//     if (sum - coin >= 0) {
//       min = Math.min(min, helper(coins, sum - coin, count + 1));
//     }
//   }
//   return min;
// };

console.log(minCoinChangeTB([1, 5, 10, 25], 3000));
console.log(minCoinChangeTB([1, 5, 10, 25], 6));
console.log(minCoinChangeTB([1, 5, 10, 25], 49));

console.log(minCoinChangeBU([1, 5, 10, 25], 3000));
console.log(minCoinChangeBU([1, 5, 10, 25], 6));
console.log(minCoinChangeBU([1, 5, 10, 25], 49));
