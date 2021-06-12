//BFS Breadth First Search 너비 우선 탐색

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const result = []
  if(root === null) return result
  
  const queue = [root]
  let right = true // zigzag 방향 지정
  while(queue.length > 0) {
      let size = queue.length //for문에서 쓰일 size 변수
      let values = [] //for문에서 넣을 현재 계층의 node 값
      
      for(let i = 0; i < size; i++) {
          const node = queue.shift() //queue의 맨 앞의 node를 제거하면서 변수화 (dequeue)
          if(right) { // 우측이면
              values.push(node.val) //push로 values 뒤에 값을 넣음
          } else {
              values.unshift(node.val) // 좌측이면 unshift로 앞에 값을 넣음
          }
          
          if(node.left !== null) queue.push(node.left)
          if(node.right !== null) queue.push(node.right)
      }
      result.push(values)
      right = !right //방향 바꿔줌
  }
  return result
};