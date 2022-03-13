/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function mergeToNum(linkedList) {
    let number = '';
    while (linkedList) {
      number = linkedList.val + number;
      linkedList = linkedList.next;
    }
    return BigInt(number);
  }

  const resultNumber = mergeToNum(l1) + mergeToNum(l2);
  const stringNumber = '' + resultNumber;
  let node;
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    if (!node) {
      node = new ListNode(stringNumber[i]);
    } else {
      let temp = node;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new ListNode(stringNumber[i]);
    }
  }
  return node;
};
