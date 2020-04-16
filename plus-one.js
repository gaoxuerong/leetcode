/**
 * @description https://leetcode-cn.com/problems/plus-one
 * @param {*} digits
 */
var plusOne = function(digits) {
    let Len = digits.length;
    for (let i =  Len - 1; i >= 0; i--){
        digits[i] += 1;
        if (digits[i] < 10) {
            return digits
        }
        digits[i] = 0;
        if (i===0) {
            digits.unshift('1')
            return digits
        }
    }
}