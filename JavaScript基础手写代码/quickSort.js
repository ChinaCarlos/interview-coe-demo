const arr = [4, 6, 2, 6, 2, 1, 7, 4, 8, 9];

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let value = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= value) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), value, ...quickSort(right)];
}

console.log(quickSort(arr));
