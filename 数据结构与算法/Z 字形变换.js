function convert(s, numRows) {
  if (numRows <= 1) return s;

  let row = 0;
  let down = true;

  let result = new Array(numRows).fill("");

  for (let i = 0; i < s.length; i++) {
    result[row] += s[i];
    if (down) {
      row++;
    } else {
      row--;
    }
    if (row === 0) {
      down = true;
    }
    if (row === numRows - 1) {
      down = false;
    }
  }

  return result.join("");
}
