function finbo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return finbo(n - 1) + finbo(n - 2);
}
console.log(finbo(4));

function finbo1(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

console.log(finbo1(4));

function finbo2(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1,
    sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}
console.log(finbo2(4));
