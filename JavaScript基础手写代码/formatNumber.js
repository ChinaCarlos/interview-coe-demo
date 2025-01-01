function formatNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    throw Error("type error");
  }
  let [numStr, decimal] = num.toString().split(".");

  let arr = [];
  if (numStr.length <= 3) {
    return num;
  }
  let lastSplitIndex = 0;

  for (let i = 0; i < numStr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      arr.push(numStr.slice(i - 3, i));
      lastSplitIndex = i;
    }
  }

  let lastNum = numStr.slice(lastSplitIndex, numStr.length);

  return (
    arr.join(",") +
    (lastNum ? `,${lastNum}` : "") +
    (decimal ? `.${decimal}` : "")
  );
}

console.log(formatNumber(23232323.23));
console.log(formatNumber(23232323.2));
console.log(formatNumber(23232323));
console.log(formatNumber(23));
