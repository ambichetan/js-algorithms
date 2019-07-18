
// !!! Optimized, but WRONG, make it right later. 
var lengthOfLIS = function (nums) {
  if (!nums || nums.length === 0) return 0;
  var cache = new Array(nums.length);
  return helper(nums, -1, nums.length - 1, cache);
};

var helper = function (nums, prev, index, cache) {
  if (index === -1) return 0;

  if (cache[index] > -1) {
    return cache[index];
  }

  let max = Number.MIN_SAFE_INTEGER;
  let num = nums[index];
  if (prev === -1 || num < nums[prev]) {
    max = Math.max(max, 1 + helper(nums, index, index - 1, cache));
  }
  max = Math.max(max, helper(nums, prev, index - 1, cache));
  cache[index] = max;

  return max;
};

/*

// OLD
var lengthOfLIS = function (nums) {
  if (!nums || nums.length === 0) return 0;
  var cache = new Array(nums.length);
  for (let i = 0; i < nums.length; i++)
    cache[i] = new Array(nums.length);
  return helper(nums, -1, nums.length - 1, cache);
};

var helper = function (nums, prev, index, cache) {
  if (index === -1) return 0;

  if (prev !== -1 && cache[prev][index] > -1) {
    return cache[prev][index];
  }

  let max = Number.MIN_SAFE_INTEGER;
  let num = nums[index];
  if (prev === -1 || num < nums[prev]) {
    max = Math.max(max, 1 + helper(nums, index, index - 1, cache));
  }
  max = Math.max(max, helper(nums, prev, index - 1, cache));
  if (prev > -1) {
    cache[prev][index] = max;
  }
  return max;
};

*/

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
