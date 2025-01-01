function hasCircularReference(obj, visitors = new WeakSet()) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  if (visitors.has(obj)) {
    return true;
  }

  visitors.add(obj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (hasCircularReference(obj[key], visitors)) {
        return true;
      }
    }
  }

  return false;
}

// 测试代码
const a = {};
const b = { a: a };
a.b = b; // 形成循环引用

console.log(hasCircularReference(a)); // true

const c = { name: "John" };
const d = { name: "Doe" };

console.log(hasCircularReference(c)); // false
