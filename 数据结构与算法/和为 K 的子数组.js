function subarraySum(nums, k) {
  let count = 0;
  let prefixSums = new Map();
  let prefixSum = 0;

  prefixSums.set(0, 1);

  for (num of nums) {
    prefixSum += num;

    if (prefixSums.has(prefixSum - k)) {
      count += prefixSums.get(prefixSum - k);
    }

    prefixSums.set(prefixSum, (prefixSums.get(prefixSum) || 0) + 1);
  }

  return count;
}
