/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  //하위의 트리까지 모두 이진트리여야 하기 때문에 재귀로 접근
    return _isValidBST(root, -(2**31) - 1 , 2**31) // 제약조건에서 주어진 Node.val의 범위
  
    function _isValidBST(root, lower, higher) {
        if(!root) return true 
        
      // 위에 언급된 유효한 이진트리의 조건을 그대로 나열
        return root.val > lower && root.val < higher && _isValidBST(root.left, lower, root.val) && _isValidBST(root.right, root.val, higher)
    }
};