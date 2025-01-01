var firstMissingPositive = function (nums) {
  if (nums.indexOf(1) === -1) return 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i] > nums.length) {
      nums[i] = 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

function firstMissingPositive(nums) {
  const n = nums.length;

  if (!nums.includes(1)) return 1;

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      const temp = nums[i];
      nums[i] = nums[nums[i] - 1];
      nums[nums[i] - 1] = temp;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
}
