// // vue2.x对象的响应式原理 ：Object.defineProperty
// // vue2.x[]的响应式原理 ： 覆盖可以修改数组的7个方法
// const originalPrototype = Array.prototype
// const arrPrototype = Object.create(originalPrototype);
// ['push','pop','shift','unshift','reverse','sort','split'].forEach((method) => {
//   arrPrototype[method] = function() {
//     // 做之前的功能
//     originalPrototype[method].call(this,arguments)
//     // 更新
//     notifyUpdate()
//   }
// })

// function observe(obj) {
//   if(typeof obj !== 'object' || obj == null) {
//     return obj
//   }
//   // 如果是数组就替换原型
//   if(Array.isArray(obj)) {
//     Object.setPrototypeOf(obj,arrPrototype)
//   } else {
//     const keys = Object.keys(obj)
//     for (let i = 0;i < keys.length;i++) {
//       const key = keys[i]
//       // 对obj的每一个key进行拦截
//       defineReactive(obj,key,obj[key])
//     }
//   }
// }
// function defineReactive(obj, key, val) {
//   // 递归遍历
//   observe(val)
//   // val实际上就是一个闭包
//   Object.defineProperty(obj, key, {
//     set(newVal) {
//       if (newVal !== val) {
//         // newVal 可能是对象
//         observe(newVal)
//         notifyUpdate()
//         val = newVal
//       }
//     },
//     get() {
//       return val
//     }
//   })
// }
// function notifyUpdate() {
//   console.log('页面更新')
// }
// const data = {
//   foo: 'foo',
//   person: {name: 'xiaozhang'},
//   hobby: ['eat','drink','play']
// }
// observe(data)
// data.foo = 'fooooooo'
// data.person.name = 'xiaogao'
// data.person = {age: 21}
// data.hobby.push('watching TV')
// console.log(data.hobby)
// // vue2.x 问题分析：
// // 1. 需要响应的数据太大，递归遍历不好；
// // 2. 新增/删除属性无法监听
// // 3. 数组响应需要额外实现
// // 4.修改语法有限制
// ----------------------------vue3.x---------------------------------
// 用proxy做代理
const toProxy = new WeakMap() // obj:observed
const toRaw = new WeakMap() // observed:obj
function isObject(obj) {
  return (typeof obj === 'object') || obj === null
}
function reactive(obj) {
  if(!isObject(obj)) {
    return obj
  }
  return new Proxy(obj,{
    get(target,key,receiver) {
      const res = Reflect.get(target,key,receiver)
      console.log(key)
      return isObject(res) ? reactive(res) : res
    },
    set(target,key,value,receiver) {
      const res = Reflect.set(target,key,receiver)
      console.log('set'+key+value)
      return res
    },
    deleteProperty(target,key) {
      const res = Reflect.deleteProperty(target,key)
      console.log('set')
      return res
    }
  })
}
const r = reactive({
  name: 'xuerong',
  age: 21,
  person: { height: 175 }
})
// 获取
r.name
// 设置已经存在的属性
r.name = 'xiaogao'
// 设置不存在的属性
r.address = '北京市朝阳区'
// 嵌套对象
r.person.height = 178
