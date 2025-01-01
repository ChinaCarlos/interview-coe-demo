// 函数柯里化
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

// 不同的调用方式
console.log(curriedSum(1)(2)(3)); // 输出: 6
console.log(curriedSum(1, 2)(3)); // 输出: 6
console.log(curriedSum(1)(2, 3)); // 输出: 6
console.log(curriedSum(1, 2, 3)); // 输出: 6
