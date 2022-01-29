[Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

Given the `root` of a binary tree, return _the level order traversal of its nodes' values._ (i.e., from left to right, level by level).

#### Example 1:

![](https://images.velog.io/images/wanderer-s/post/bf40dcbb-0fde-468d-9fbb-4adad022c8c6/image.png)

```js
Input: root = [3, 9, 20, null, null, 15, 7];
Output: [[3], [9, 20], [15, 7]];
```

#### Example 2:

```js
Input: root = [1];
Output: [[1]];
```

#### Example 3:

```js
Input: root = [];
Output: [];
```

#### Constraints:

- The number of nodes in the tree is in the range `[0, 2000].`
- -1000 <= Node.val <= 1000
