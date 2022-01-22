[Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST).*

A **valid BST** is defined as follows:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.
#### Example 1:
![](https://images.velog.io/images/wanderer-s/post/6722d6f9-27ed-4296-adbe-6318db13b7f2/tree1.jpg)
```js
Input: root = [2,1,3]
Output: true
```
#### Example 2:
![](https://images.velog.io/images/wanderer-s/post/0cbbeadb-626d-44aa-9a3b-41974419108a/tree2.jpg)
```js
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```
#### Constraints:

- The number of nodes in the tree is in the range [1, 104].
- -2 ** 31 <= Node.val <= 2 ** 31 - 1