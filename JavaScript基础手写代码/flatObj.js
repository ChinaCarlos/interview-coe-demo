function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key; // 拼接新的键
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObject(obj[key], newKey, result); // 递归处理嵌套对象
      } else {
        result[newKey] = obj[key]; // 将值赋给结果对象
      }
    }
  }
  return result;
}

// 示例对象
const obj = {
  a: 1,
  b: {
    b1: 2,
    b2: {
      b21: 3,
      b22: 4,
    },
  },
  c: 5,
};

const flatObj = flattenObject(obj);
console.log(flatObj);
