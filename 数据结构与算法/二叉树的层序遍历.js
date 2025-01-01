function leverOrder(root) {
  if (!root) return [];
  const result = [];
  const current = [root];
  while (current.length) {
    let level = [];
    let levelSize = current.length;

    for (let i = 0; i < levelSize; i++) {
      const node = current.shift();
      level.push(node, val);
      if (node.left) current.push(node.left);
      if (node.right) current.push(node.right);
    }

    result.push(level);
  }
  return result;
}
