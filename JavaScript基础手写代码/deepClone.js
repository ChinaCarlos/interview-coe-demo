function deepClone(obj, hash = new WeakMap()) {
  // 判断是否为null ,不能用typeof
  if (obj === null) return obj;
  // 循环对象引用
  if (hash.has(obj)) return hash.get(obj);
  // 日期处理
  if (obj instanceof Date) return new Date(obj);
  // 正则处理
  if (obj instanceof RegExp) return new RegExp(obj);
  // 函数处理
  if (typeof obj !== "object") return obj;
  // 对象深拷贝，包括数组
  let cloneObj = new obj.constructor();

  // 添加到hash 里面，判断后面是否有循环引用用
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }

  return cloneObj;
}
let obj = {
  info: {
    name: "hello",
    date: new Date("2011-12-2"),
    f: () => {},
    r: /xxx/gi,
  },
};

const obj1 = deepClone(obj);

obj1.info.name = "xxxx";
delete obj1.info.r;

console.log(obj1, obj);
