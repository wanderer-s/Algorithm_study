/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const array1 = [];
  const array2 = [];

  //주어진 이진 트리를 두개의 array에 오름차순으로 정렬
  extractValues(root1, array1);
  extractValues(root2, array2);

  const resultArray = [];

  let idx1 = (idx2 = 0);

  while (idx1 < array1.length && idx2 < array2.length) {
    // 각 array를 비교해여 더 작은 수를 resultArray에 추가 후 idx +1
    array1[idx1] < array2[idx2] ? resultArray.push(array1[idx1++]) : resultArray.push(array2[idx2++]);
  }

  //상단의 반복문이 끝나면 array1 또는 array2에 값이 남아있기에 그걸 처리하기 위한 반복문
  while (idx1 < array1.length) resultArray.push(array1[idx1++]);
  while (idx2 < array2.length) resultArray.push(array2[idx2++]);

  return resultArray;

  function extractValues(node, array) {
    if (!node) return;
    extractValues(node.left, array);
    array.push(node.val);
    extractValues(node.right, array);
  }
};
