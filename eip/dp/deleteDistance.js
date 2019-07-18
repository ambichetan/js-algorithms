var minDistanceBU = function (word1, word2) {
  const w1 = word1.length + 1;
  const w2 = word2.length + 1;
  const dp = Array(w1);
  for (let i = 0; i < w1; i++) dp[i] = Array(w2);
  for (let i = 0; i < w1; i++) dp[i][0] = i;
  for (let i = 0; i < w2; i++) dp[0][i] = i;

  for (let i = 1; i < w1; i++) {
    for (let j = 1; j < w2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        const count1 = 1 + dp[i - 1][j];
        const count2 = 1 + dp[i][j - 1];
        dp[i][j] = Math.min(count1, count2);
      }
      // print(dp);
    }
  }

  return dp[w1 - 1][w2 - 1];
}

var minDistanceTB = function (word1, word2) {
  const dp = new Array(word1.length);
  for (let i = 0; i < word1.length; i++) dp[i] = new Array(word2.length);
  // NOT NEEDED !!! 
  // const dp = new Array(word1.length);
  // for (let i = 0; i < word1.length; i++) {
  //   dp[i] = new Array(word2.length);
  //   for (let j = 0; j < word2.length; j++) {
  //     dp[i][j] = 0;
  //   }
  // }
  return helper(word1, word2, 0, 0, dp);
};

const helper = function (word1, word2, w1, w2, dp) {
  if (w1 === word1.length) return word2.length - w2;
  if (w2 === word2.length) return word1.length - w1;

  if (dp[w1][w2]) return dp[w1][w2];

  if (word1[w1] === word2[w2]) {
    dp[w1][w2] = helper(word1, word2, w1 + 1, w2 + 1, dp);
  } else {
    const count1 = 1 + helper(word1, word2, w1 + 1, w2, dp);
    const count2 = 1 + helper(word1, word2, w1, w2 + 1, dp);
    dp[w1][w2] = Math.min(count1, count2);
  }
  return dp[w1][w2];
}

// WRONG THINKING !!!
// var minDistance = function (word1, word2) {
//   return helper(word1, word2, 0);
// };

// const helper = function (word1, word2) {
//   if (word1 === word2) return 0;
//   let count = Infinity;
//   for (let i = 0; i < word1.length; i++) {
//     count = Math.min(count, 1 + helper(word1.substring(0, i) + word1.substring(i + 1, word1.length), word2));
//   }
//   for (let i = 0; i < word2.length; i++) {
//     count = Math.min(count, 1 + helper(word1, word2.substring(0, i) + word2.substring(i + 1, word2.length)));
//   }
//   return count;
// }


console.log(minDistanceBU("plas", "als"));
console.log(minDistanceTB("plas", "als"));
console.log(minDistanceBU("sea", "eat"));
console.log(minDistanceTB("sea", "eat"));
console.log(minDistanceBU("", "sea"));
console.log(minDistanceTB("", "sea"));
console.log(minDistanceBU("dinitrophenylhydrazine", "acetylphenylhydrazine"));
console.log(minDistanceTB("dinitrophenylhydrazine", "acetylphenylhydrazine"));


const print = (matrix) => {
  var waitTill = new Date(new Date().getTime() + 500);
  while (waitTill > new Date()) {}
  console.log('\033c');
  console.log(matrix);
}
