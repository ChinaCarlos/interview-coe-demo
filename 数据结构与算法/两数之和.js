const nums = [1, 2, 5, 7, 6, 2, 57, 4];
function twoNumberSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    }
  }
  return [];
}

console.log(twoNumberSum(nums, 3));
