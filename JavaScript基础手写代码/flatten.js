const arr = [1, 2, 4, [4, 5, [44, 5], [4, 2, [5, 3]]]];

function flatten(arr) {
  return arr.reduce((result, value, index) => {
    return Array.isArray(value)
      ? [...result, ...flatten(value)]
      : [...result, value];
  }, []);
}

console.log(flatten(arr));
console.log(
  Array.from(new Set(arr.flat(Infinity))).sort((a, b) => {
    return a - b;
  })
);
