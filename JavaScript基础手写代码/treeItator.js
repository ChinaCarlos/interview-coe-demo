class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("tree:", root);

function DFSSearch(root, target) {
  if (root === null) return root;
  if (root.value === target) return root;
  let leftSearch = DFSSearch(root.left, target);
  if (leftSearch) {
    leftSearch;
  }
  return (rightSearch = DFSSearch(root.right, target));
}

function BFSSearch(root, target) {
  if (root === null) return null;
  let queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.value === target) {
      return node;
    }
    queue.push(node.left);
    queue.push(node.right);
  }
  return null;
}

console.log(BFSSearch(root, 3));
