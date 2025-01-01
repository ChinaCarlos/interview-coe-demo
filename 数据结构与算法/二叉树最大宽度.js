function widthOfBinaryTree(root) {
  if (!root) return 0;

  let maxWidth = 0;
  let queue = [[root, 0]];

  while (queue.length) {
    const size = queue.length;
    let startIndex = queue[0][1];
    let endIndex = startIndex;
    for (let i = 0; i < size; i++) {
      const [node, index] = queue.shift();
      endIndex = index;

      if (node.left) queue.push([node.left, 2 * index]);
      if (node.right) queue.push([node.right, 2 * index + 1]);
    }
    const currentWidth = endIndex - startIndex + 1;
    maxWidth = Math.max(currentWidth, maxWidth);
  }

  return maxWidth;
}
