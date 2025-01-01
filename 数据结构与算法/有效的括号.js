// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
function isValid(s) {
  const stack = [];
  const obj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === stack[stack.length - 1] && stack.length) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
}

console.log(isValid("([])"));
