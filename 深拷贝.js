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