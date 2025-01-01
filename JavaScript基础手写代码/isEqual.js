const obj1 = { name: "obj1", info: { gender: "man", age: 23 } };
const obj2 = { name: "obj1", info: { gender: "man", age: 233 } };

function isEqual(obj1, obj2) {
  const isObject = (obj) => {
    return typeof obj === "object" && obj !== null;
  };
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }
  // 判断属性长度
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  // 如果是对象
  if (obj1 === obj2) {
    return true;
  }

  // 递归比较key
  const keys = Object.keys(obj1);
  for (let i = 0; i < keys.length; i++) {
    const res = isEqual(obj1[keys[i]], obj2[keys[i]]);
    if (!res) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(obj1, obj2));
