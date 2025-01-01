function instanceOf(left, right) {
  let proto = left.__proto__;
  const prototype = right.prototype;
  while (true) {
    if (proto === null) return false;
    if (prototype === proto) return true;
    proto = proto.__proto__;
  }
}

const arr = [];

console.log(instanceOf(arr, Array));

console.log(
  Object.prototype.toString.call([]).slice(8, -1).toLocaleLowerCase()
);
