## Problem

[All Elements in Two Binary Search Trees](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/)

Given two binary search trees `root1` and `root2`, return _a list containing all the integers from both trees sorted in **ascending** order._

#### Example 1:

![](https://images.velog.io/images/wanderer-s/post/4f5fed6f-00f0-43da-913a-d2c3eded9c23/image.png)

```js
Input: (root1 = [2, 1, 4]), (root2 = [1, 0, 3]);
Output: [0, 1, 1, 2, 3, 4];
```

#### Example 2:

![](https://images.velog.io/images/wanderer-s/post/fd5f4c33-24ed-46e0-a68f-2799c4273003/image.png)

```js
Input: (root1 = [1, null, 8]), (root2 = [8, 1]);
Output: [1, 1, 8, 8];
```

#### Constraints:

- The number of nodes in each tree is in the range [0, 5000].
- `-10⁵ <= Node.val <= 10⁵`
