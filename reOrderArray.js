/* 题目描述:
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
并保证奇数和奇数，偶数和偶数之间的相对位置不变。
*/
// 1.开辟新数组方法
function reOrderArray (array) {
  let oddArr = [];
  let evenArr = [];
  for (let item of array) {
    if (item%2 === 1){
      oddArr.push(item);
    }
    if (item%2 === 0){
      evenArr.push(item);
    }
  }
  let newArr = oddArr.concat(evenArr);
  return newArr;
}
// 2.不开辟新数组方法
function reOrderArray (array) {
  
}



