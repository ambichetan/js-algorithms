var threeSum = function (nums) {
  if (!nums) return [];
  let map = new Map();
  helper(nums, 0, 0, [], map);
  return Array.from(map.values());
};

var helper = function (nums, index, sum, selected, map) {
  if (index === nums.length || selected.length === 3) {
    if (selected.length === 3 && sum === 0) {
      let copy = selected.slice();
      let string = copy.sort((a, b) => a - b).toString();
      if (!map.has(string)) {
        map.set(string, copy);
      }
    }
    return;
  }
  // without
  helper(nums, index + 1, sum, selected, map);
  //with 
  selected.push(nums[index]);
  helper(nums, index + 1, sum + nums[index], selected, map);
  selected.pop();
}

var threeSumIte = function (nums) {
  if (!nums) return [];
  let result = new Map();
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let other = 0 - (nums[i] + nums[j]);
      if (map.has(other)) {
        const selected = [nums[i] + nums[j] + other];
        let string = selected.sort((a, b) => a - b).toString();
        if (!result.has(string)) {
          result.set(string, selected);
        }
      }
    }
  }
  return Array.from(result.values());
}

console.log(threeSumIte([1, -1, -1, 0]));


// other trials
/*
var threeSum = function (nums) {
  if (!nums) return [];
  nums.sort((a, b) => a - b);
  let result = [];
  helper(nums, 0, 0, [], result);
  return result;
};

var helper = function (nums, index, sum, selected, result) {
  if (index === nums.length || selected.length === 3) {
    if (selected.length === 3 && sum === 0) {
      result.push(selected.slice());
    }
    return;
  }
  while ((index > 0) && (nums[index] === nums[index - 1]) && index < nums.length) {
    index = index + 1;
  }
  // without
  helper(nums, index + 1, sum, selected, result);
  //with
  selected.push(nums[index]);
  helper(nums, index + 1, sum + nums[index], selected, result);
  selected.pop();
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

*/
