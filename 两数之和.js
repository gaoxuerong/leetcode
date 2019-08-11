//方法一：暴力枚举方法
// var twoSum = function(nums, target) {
//     for(var i=0;i<nums.length;i++){
//         for(var j=i+1;j<nums.length;j++){
//             if(nums[j]==target-nums[i]){
//                 return [i,j]
//             }
//         }
//     }
// };
//方法二 采用映射方法
// var twoSum = function(nums, target) {
//     let result = {}
//     for(var i=0;i<nums.length;i++){
//         if(result[nums[i]]!==undefined){
//             return [result[nums[i]],i]
//         }else{
//             result[target-nums[i]] = i
//         }
//     }
// };