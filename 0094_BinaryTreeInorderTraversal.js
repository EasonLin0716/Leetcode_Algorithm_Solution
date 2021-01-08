// Given the root of a binary tree, return the inorder traversal of its nodes' values.
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
var inorderTraversal = function (root) {
  const stack = [];
  traverseInOrder(root, (node) => {
    stack.push(node.val);
  });
  return stack;
};

function traverseInOrder(node, cb) {
  if (node !== null) {
    traverseInOrder(node.left, cb);
    cb(node);
    traverseInOrder(node.right, cb);
  }
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
a.right = b;
b.left = c;
console.log(inorderTraversal(a));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
