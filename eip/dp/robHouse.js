const robTB = (houses) => {
  const dp = Array(houses.length);
  for (let i = 0; i < houses.length; i++) dp[i] = Array(2);
  return helper(houses, 0, 0, dp);
};

const helper = (houses, index, prevRobbed, dp) => {
  if (index === houses.length) {
    return 0;
  }

  let rob = 0;
  let noRob = (dp[index][0] === undefined) ? helper(houses, index + 1, 0, dp) : dp[index][0];
  dp[index][0] = noRob;

  if (!prevRobbed) {
    rob = (dp[index][1] === undefined) ? (houses[index] + helper(houses, index + 1, 1, dp)) : dp[index][1];
    dp[index][1] = rob;
  }

  return Math.max(rob, noRob);
};

const robBU = (houses) => {
  const dp = Array(houses.length);
  for (let i = 0; i < houses.length; i++) dp[i] = Array(2);

  dp[0][0] = 0;
  dp[0][1] = houses[0];

  for (let i = 1; i < houses.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = Math.max(houses[i] + dp[i - 1][0], dp[i - 1][1]);
  }

  return Math.max(dp[houses.length - 1][0], dp[houses.length - 1][1]);
};

console.log(robTB([1, 3, 1]));
console.log(robBU([1, 3, 1]));
console.log(robTB([1, 2, 3, 1]));
console.log(robBU([1, 2, 3, 1]));
