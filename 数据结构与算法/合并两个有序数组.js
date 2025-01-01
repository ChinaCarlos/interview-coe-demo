/**
 *  输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出：[1,2,2,3,5,6]
    解释：需要合并 [1,2,3] 和 [2,5,6] 。
    合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 */
const nums1 = [1, 2, 3, 0, 0, 0, 5];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;

// 1. 第一种先把两个数组给拼接，然后在给新的拼接数组排序
// 2. 第二种  利用双指针，把最小的的数存到一个新数组里面
// 3. 所以，我们总共需要创建三个指针，两个指针用于指向 ums1 和 nums2 的初始化元素数量的末位，也就是分别指向 m−1 和 n−1 的位置，还有一个指针，我们指向 nums1 数组末位即可。

function mergeSortArray(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 || j >= 0) {
    if (i < 0) nums1[k--] = nums2[j--];
    else if (j < 0) nums1[k--] = nums1[i--];
    else if (nums1[i] < nums2[j]) nums1[k--] = nums2[j--];
    else nums1[k--] = nums1[i--];
  }
  return nums1.slice(0, k);
}

console.log(mergeSortArray(nums1, 3, nums2, 3));
