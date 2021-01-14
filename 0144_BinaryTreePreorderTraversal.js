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
 * @return {number[]}
 */
// var preorderTraversal = function (root) {
//   var stack = [];
//   helper(root, (val) => {
//     stack.push(val);
//   });
//   return stack;
// };

// var helper = function (node, cb) {
//   if (node !== null) {
//     cb(node.val);
//     helper(node.left, cb);
//     helper(node.right, cb);
//   }
// };
// var preorderTraversal = function (root) {
//   if (!root) return [];
//   const res = [],
//     stack = [root];
//   while (stack.length > 0) {
//     const { val, left, right } = stack.pop();
//     res.push(val);
//     if (right) stack.push(right);
//     if (left) stack.push(left);
//   }
//   return res;
// };

// var preorderTraversal = function (root) {
//   function traverse(node) {
//     if (!node) return [];
//     return [node.val, ...traverse(node.left), ...traverse(node.right)];
//   }
//   return traverse(root);
// };
const preorderTraversal = (root) =>
  root
    ? [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
      ]
    : [];
