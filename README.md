```
1.分页计算：在一个分页表格中，给定每页显示的条数（pageSize），以及当前元素的序号（index），求所在页码：Math.ceil((index+1)/pageSize);思路：一般返回数据都是从下标为0开始，要先加1，这才是真正的数据位置，然后除以每页条数，向上取整；
```

```
2. 求数组最值： const A = [1,2,3,19,6,5] Math.max(...A)
```

```'
3.判断一个数是否是素数
function (n) {
    let is_prime = false
    if (n<=1) {
        return is_prime
    }
    const N = Math.floor(Math.sqrt(n))
    for (let i = 2;i <= N;i++) {
      if(n%i === 0){
        is_prime = true
        break
      }
    }
    return is_prime
}
思路：在判断一个数是不是素数，首先就是看该数除了1和它本身还有没有其他的因数，其实就是判断该数n除以1～n之间的数能不能除尽，其实我们用n除以（1～根号n）之间的数，看能不能除尽就够了；
```
```
4.括号匹配问题
给定一个括号表达式，中间只有[],和(),判断表达式是不是平衡的；
思路：出栈入栈问题
function(){
  
}
```
5.O(n)的打乱算法
```
function Random(arr) {
  console.log(arr)
  for(let i = 0;i < arr.length - 1;i++){
    let j = i+Math.floor(Math.random()*(arr.length-i));
    console.log(j)
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
```