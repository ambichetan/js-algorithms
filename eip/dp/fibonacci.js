const fibTB = function (n) {
  const dp = Array(n);
  dp[0] = 0;
  dp[1] = 1;
  return helper(n, dp);
};

const helper = function (n, dp) {
  if (dp[n] !== undefined) return dp[n];
  dp[n] = helper(n - 1, dp) + helper(n - 2, dp);
  return dp[n];
};

const fibBU = function (n) {
  const dp = Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const fibBUOpt = function (n) {
  if (n < 2) return n;
  let n1 = 0;
  let n2 = 1;
  let n3;
  for (let i = 2; i <= n; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  return n3;
};

console.log(fibTB(1000));
console.log(fibBU(100));
console.log(fibBUOpt(100000000));
