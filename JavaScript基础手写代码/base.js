// JS的基础类型

const bool = true; // boolean类型
const num1 = 1; // Number 类型
const str = "string"; // string 类型

// 判断类型

Object.prototype.toString.call(null).slice(8, -1).toLocalLowerCase(); // null
// [Object Null]

const obj = {
  a: "",
  b: true,
  c: undefined,
  d: null,
  f: function () {},
  g: () => {},
  k: /xs/i,
  h: new Date(),
  s: Symbol("f"),
  t: 1n,
};

JSON.stringify(obj);

function Person() {}

const p1 = new Person();
