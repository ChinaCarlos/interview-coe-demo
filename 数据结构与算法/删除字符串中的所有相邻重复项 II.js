function removeDuplicates(s, k) {
  const stack = [];
  const countStack = [];
  let i = 0;
  while (i < s.length) {
    if (stack[stack.length - 1] === s[i]) {
      stack.push(s[i]);
      countStack[countStack.length - 1] = countStack[countStack.length - 1] + 1;
      if (countStack[countStack.length - 1] === k) {
        for (let j = 0; j < k; j++) {
          stack.pop();
        }
        countStack.pop();
      }
    } else {
      stack.push(s[i]);
      countStack.push(1);
    }
    i++;
  }

  return stack.join("");
}
