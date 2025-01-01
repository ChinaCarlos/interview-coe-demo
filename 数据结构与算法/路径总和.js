function hasPathSum(root, targetSum) {
  if (!root) return false;
  let queue = [[root, root.val]];
  while (queue.length) {
    const [node, currentSum] = queue.shift();
    if (!node.left && !node.right && targetSum === currentSum) return true;
    if (node.left) {
      queue.push([node.left, node.left.val + currentSum]);
    }
    if (node.right) {
      queue.push([node.right, node.right.val + currentSum]);
    }
  }
  return false;
}

// 递归实现
function hasPathSum2(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && targetSum === root.val) {
    return true;
  }
  const rest = targetSum - root.val;

  return hasPathSum2(root.left, rest) || hasPathSum2(root.right, rest);
}
