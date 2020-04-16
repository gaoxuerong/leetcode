function Random(arr) {
  console.log(arr)
  for(let i = 0;i < arr.length - 1;i++){
    const j = i + Math.floor(Math.random() * (arr.length-i));
    console.log(j)
    console.log(j)
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function Random1(arr) {
  return arr.sort((x,y) => Math.random - 0.5)
}
// console.log(Random[1,2,3,4,5,6,7,8,9])
// Random([1,2,3,4,5,6,7,8,9])
function gen(w) {
  const arr = []
  for(let i = 0;i<w*10000;i++){
    arr[i] = i+1
    Random1(arr)
    return arr;
  }
}
gen(100)