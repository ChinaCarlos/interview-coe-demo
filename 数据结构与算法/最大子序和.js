function maxSubArray(nums) {
  let prev = 0;
  let maxValue = nums[0];
  nums.forEach((value) => {
    prev = Math.max(prev + value, value);
    maxValue = Math.max(prev, maxValue);
  });
  return maxValue;
}
