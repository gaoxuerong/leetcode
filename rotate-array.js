/**
 * @description 来源 https://leetcode-cn.com/problems/rotate-array/
 * @param {*} nums 给定的数组
 * @param {*} k 移动的位置
 */
var rotate = function(nums, k) {
  const len = nums.length
  const twoArr = nums.slice(len - k).reverse()
  nums.splice(len - k, k)
  for (let item of twoArr) {
      nums.unshift(item)
  }
  return nums
};