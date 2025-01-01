const data = [
  { id: 1, parentId: null, name: "Root" },
  { id: 2, parentId: 1, name: "Child 1" },
  { id: 3, parentId: 1, name: "Child 2" },
  { id: 4, parentId: 2, name: "Child 1.1" },
  { id: 5, parentId: 2, name: "Child 1.2" },
];

function arrToTree(arr, parentId = null) {
  return arr
    .filter((item) => item.parentId === parentId)
    .map((item) => {
      return {
        ...item,
        children: arrToTree(arr, item.id),
      };
    });
}

console.log(arrToTree(data));
