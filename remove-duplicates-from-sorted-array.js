/**
 * @description 来源https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {@} nums 给定的数组
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }
  return nums.length;
};