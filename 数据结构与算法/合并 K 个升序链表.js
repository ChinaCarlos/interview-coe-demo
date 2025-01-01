function mergeKLists(lists) {
  if (!lists.length) return null;

  const mergeTowList = (list1, list2) => {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
      list1.next = mergeTowList(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeTowList(list1, list2.next);
      return list2;
    }
  };

  const merge = (lists, left, right) => {
    if (left === right) return lists[left];
    const mid = Math.floor((left + right) / 2);
    const l1 = merge(lists, left, mid);
    const l2 = merge(lists, mid + 1, right);

    return mergeTowList(l1, l2);
  };

  return merge(lists, 0, lists.length - 1);
}
