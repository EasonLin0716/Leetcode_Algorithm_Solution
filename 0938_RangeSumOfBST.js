// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  traverseInOrder(root, (node) => {
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
  });
  return sum;
};

function traverseInOrder(node, callback) {
  if (node !== null) {
    traverseInOrder(node.left, callback);
    callback(node);
    traverseInOrder(node.right, callback);
  }
}
var a = new TreeNode(10);
var b = new TreeNode(5);
var c = new TreeNode(3);
var d = new TreeNode(7);
var e = new TreeNode(15);
var f = new TreeNode(18);
a.left = b;
b.left = c;
b.right = d;
a.right = e;
e.right = f;
console.log(rangeSumBST(a, 7, 15));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
