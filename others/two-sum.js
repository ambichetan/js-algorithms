/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
   const dict = {};
   for (let i = nums.length; i >= 0 ; i--) {
       if (dict[nums[i]] !== undefined) {
           return [dict[nums[i]], i];
       }
       dict[target - nums[i]] = i;
   }
 };

var twoSum = function(nums, target) {
    const numsMap = {};
    for(let i = 0 ; i < nums.length ; i++) {
      if(numsMap[target-nums[i]]) {
        return [i,numsMap[target-nums[i]]];
      }
        numsMap[nums[i]] = i;
    }
};


var twoSum = function(nums, target) {
    for(let i = 0 ; i < nums.length ; i++) {
        const num1 = nums[i];
        for(let j = i+1 ; j < nums.length ; j++) {
            const num2 = nums[j];
            if(num1 + num2 === target){
                return [i,j];
            }
        }
    }
};
