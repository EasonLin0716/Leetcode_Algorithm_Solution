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
var deepestLeavesSum = function (root) {
  var count = 0;
  var map = {};
  helper(root, count, map);
  var sums = [];
  for (var k in map) {
    sums[+k] = map[k].reduce((a, b) => a + b);
  }
  return sums[sums.length - 1];
};

var helper = function (node, count, map) {
  count += 1;
  if (!map[count]) map[count] = [node.val];
  else map[count].push(node.val);
  if (node.left) helper(node.left, count, map);
  if (node.right) helper(node.right, count, map);
};

var a = new TreeNode(7, null, null);
var b = new TreeNode(8, null, null);
var c = new TreeNode(4, a, null);
var d = new TreeNode(5, null, null);
var e = new TreeNode(6, null, b);
var f = new TreeNode(2, c, d);
var g = new TreeNode(3, null, e);
var h = new TreeNode(1, f, g);

deepestLeavesSum(h);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
