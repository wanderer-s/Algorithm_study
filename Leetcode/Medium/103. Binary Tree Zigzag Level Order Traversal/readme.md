Given the `root` of a binary tree, return the *zigzag level order traversal of its nodes' values.* <br>(i.e., from left to right, then right to left for the next level and alternate between).

Example 1:

Input: root = [3, 9, 20, null, null, 15, 7]<br>
Output: [[3],[20, 9],[15, 7]]<br>

Example 2:

Input: root = [1]<br>
Output: [[1]]<br>

Example 3:

Input: root = []<br>
Output: []

Constraints:

- The number of nodes in the tree is in the range [0, 2000].
- -100 <= Node.val <= 100