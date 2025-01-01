const tree = {
  name: "root",
  children: [
    {
      name: "name1",
      children: [
        {
          name: "name1-name1",
        },
      ],
    },
    {
      name: "name3",
    },
    {
      name: "name2",
      children: [
        {
          name: "name2-name2",
        },
      ],
    },
  ],
};

function treeToArray(tree, result = []) {
  result.push(tree);
  if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      treeToArray(tree.children[i], result);
    }
  }
  return result;
}

console.log(treeToArray(tree));
