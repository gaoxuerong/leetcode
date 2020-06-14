var isValid = function(s) {
  let stack = []
  let obj = {
      "[": "]",
      "{": "}",
      "(": ")"
  }
  for (let i = 0;i < s.length;i++) {
      if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
          stack.push(s[i])
      } else {
          let key = stack.pop()
          if (s[i] !== obj[key]) {
              return false
          }
      }
  }
  if (!stack.length) {
      return true
  } else {
      return false
  }
};