function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let currentMaxArea = 0;
  while (left < right) {
    currentMaxArea = Math.max(
      currentMaxArea,
      (right - left) * Math.min(height[left], height[right])
    );

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return currentMaxArea;
}
