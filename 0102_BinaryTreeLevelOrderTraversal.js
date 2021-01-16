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
// var levelOrder = function (root, level = 0, result = []) {
//   if (!root) return [];
//   let arr = (result[level] = result[level] || []);
//   arr.push(root.val);
//   levelOrder(root.left, level + 1, result);
//   levelOrder(root.right, level + 1, result);
//   return result;
// };

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// var levelOrder = function (root) {
//   function traverse(node, level) {
//     if (!node) return null;
//     if (!result[level]) {
//       result[level] = [];
//     }
//     result[level].push(node.val);
//     traverse(node.left, level + 1);
//     traverse(node.right, level + 1);
//   }

//   const result = [];
//   traverse(root, 0);

//   return result;
// };

var levelOrder = function (root) {
  if (!root) return [];

  let res = [],
    queue = [root, null];
  let levelNodes = [];
  while (queue.length > 0) {
    const t = queue.shift();
    if (t) {
      levelNodes.push(t.val);
      if (t.left) queue.push(t.left);
      if (t.right) queue.push(t.right);
    } else {
      res.push(levelNodes);
      levelNodes = [];
      if (queue.length) queue.push(null);
    }
  }
  return res;
};

var a = new TreeNode(3);
var b = new TreeNode(9);
var c = new TreeNode(20);
var d = new TreeNode(15);
var e = new TreeNode(7);
a.left = b;
a.right = c;
c.left = d;
c.right = e;
levelOrder(a);
