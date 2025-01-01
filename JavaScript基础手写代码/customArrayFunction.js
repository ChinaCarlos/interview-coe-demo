Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};
console.log([1, 2, 3].myMap((item) => item * 2)); //[ 2, 4, 6 ]

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) && this.hasOwnProperty(i)) {
      result.push(this[i]);
    }
  }
  return result;
};
console.log([1, 2, 3].myFilter((item) => item === 2)); //[2]

Array.prototype.myReduce = function (callback, initValue) {
  let acc = initValue !== undefined ? initValue : this[0];
  let startIndex = initValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      acc = callback(acc, this[i], i, this);
    }
  }
  return acc;
};

console.log([1, 2, 3].myReduce((result, item) => result + item, 0)); // 6
