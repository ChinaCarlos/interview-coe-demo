function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

function climbStairs1(n) {
  let result = [1, 2];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result.pop();
}

function climbStairs2(n) {
  if (n <= 2) return n;
  let a = 1;
  let b = 2;
  let sum = 0;
  for (let i = 2; i < n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}

console.log(climbStairs(4));
console.log(climbStairs1(4));
console.log(climbStairs2(4));
