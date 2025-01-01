function addStrings(num1, num2) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  let maxLength = 0;
  if (num1Str.length >= num2Str.length) {
    maxLength = num1Str.length;
    num2Str = num2Str.padStart(maxLength, "0");
  } else {
    maxLength = num2Str.length;
    num1Str = num1Str.padStart(maxLength, "0");
  }
  let res = "";
  let curry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const temp = Number(num1Str[i]) + Number(num2Str[i]) + curry;
    curry = parseInt(temp / 10);
    res = (temp % 10) + res;
  }

  if (curry) {
    res = curry + res;
  }
  return res;
}

console.log(addStrings(11, 123));
