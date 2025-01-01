const arr = [1, 9, 8, 8, 7, 2, 5, 3, 3, 3, 2, 3, 1, 4, 5, 444, 55, 22];
function uniqueArray(arr) {
  // return Array.from(new Set(arr));
  return arr.reduce((result, value, index) => {
    return result.includes(value) ? result : [...result, value];
  }, []);
}

console.log(uniqueArray(arr));
