function compareVersion(version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    const a = arr1[i] || 0;
    const b = arr2[i] || 0;

    if (Number(a) > Number(b)) {
      return 1;
    } else if (Number(a) < Number(b)) {
      return -1;
    }
    if (i === maxLength - 1) {
      return 0;
    }
  }
}

console.log(compareVersion("1.2", "1.10"));
