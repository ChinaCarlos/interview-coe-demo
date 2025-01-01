function rightSideView(root) {
  let result = [];
  const queue = [root];
  while (queue.length && root) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      if (i === size - 1) {
        result.push(node.val);
      }
    }
  }
  return result;
}

function rightSideView2(root) {
  const result = [];
  function dfs(node, deepPath) {
    if (!node) return null;
    if (deepPath === result.length) {
      result.push(node.val);
    }
    dfs(node.right, deepPath + 1);
    dfs(node.left, deepPath + 1);
  }
  dfs(root, 0);
  return result;
}
