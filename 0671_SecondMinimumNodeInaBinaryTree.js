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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  const stack = [];
  helper(root, (node) => {
    stack.push(node.val);
  });
  return [...new Set(stack.sort())][1] || -1;
};

function helper(node, cb) {
  if (node !== null) {
    cb(node);
    helper(node.left, cb);
    helper(node.right, cb);
  }
}
