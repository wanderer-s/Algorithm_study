/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const listArr = [];
  const mergeList = new ListNode(-1);

  lists.forEach((list) => {
    let curr = list;
    while (curr) {
      listArr.push(curr.val);
      curr = curr.next;
    }
  });

  let currList = mergeList;
  listArr
    .sort((a, b) => a - b)
    .forEach((n) => {
      let tempNode = new ListNode(n);
      currList.next = tempNode;
      currList = currList.next;
    });

  return mergeList.next;
};
