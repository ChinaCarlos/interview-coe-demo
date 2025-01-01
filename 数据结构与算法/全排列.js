function permute(nums) {
  const result = [];
  const visited = new Set();

  function dfs(paths) {
    if (paths.length === nums.length) {
      result.push([...paths]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited.has(nums[i])) continue;
      visited.add(nums[i]);
      paths.push(nums[i]);
      dfs(paths);
      paths.pop();
      visited.delete(nums[i]);
    }
  }
  dfs([]);
  return result;
}
