function removeDuplicates(nums) {
  let slow = 0;
  let fast = 1;
  while (fast <= nums.length - 1) {
    if (nums[slow] !== nums[fast]) {
      nums[slow + 1] = nums[fast];
      slow++;
    }
    fast++;
  }

  return nums.slice(0, slow + 1);
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
