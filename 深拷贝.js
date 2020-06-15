
/*
递归深拷贝
const deepCopy = function(options) {
  if (!options || typeof options !== 'object') {
    return null;
  }
  let obj = Array.isArray(options) ? [] : {}
  for (let key in options) {
    if (options.hasOwnProperty(key)) {
      if (options[key] && typeof options[key] === 'object') {
        obj[key] = deepCopy(options[key])
      } else {
        obj[key] = options[key];
      }
    }
  }
  return obj;
}
*/
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8,-1)
}
let DFSDeepCopy = function(obj,visitedArr = []) {
  let _obj = {}
  if (getType(obj) === 'Array' || getType(obj) === 'Object' ) {
    let index = visitedArr.indexof(obj)
    _obj = getType(obj) === 'Array' ? [] : {}
    if (~index) {
      _obj = visitedArr[index]
    } else {
      visitedArr.push(obj)
      for(let item in obj) {
        _obj[item] = DFSDeepCopy(obj[item],visitedArr)
      }
    }
  } else if (getType(obj) === 'Function') {
    _obj = eval('('+obj.toString()+')')
  } else {
    _obj = obj
  }
  return _obj
}
let obj = {
  a: 1,
  b: () => console.log(1),
  c: {
    d: 3,
    e: 4
  },
  f: [1, 2],
  und: undefined,
  nul: null
}
var objCopy = DFSDeepCopy(obj)
console.log(objCopy)