/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串的长度。
 * 解法：遍历字符串，判断当前字符是否已经在 map 中存在，存在则更新无重复子串开始下标 i 为相同字符的下一位置，此时从 i 到 j 为最新的无重复子串，更新 max ，将当前字符与下标放入 map 中
 */

// 需要用到双指针加滑动窗口
function lengthOfLongestSubstring(s) {
  let map = new Map();
  let startIndex = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      startIndex = map.get(s[i]) + 1;
    }
    max = Math.max(max, i - startIndex + 1);
    map.set(s[i], i);
  }
  return max;
}

console.log(lengthOfLongestSubstring("abba"));
