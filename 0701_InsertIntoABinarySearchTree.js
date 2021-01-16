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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = (root, val) => {
  if (!root) {
    root = new TreeNode(val);
  } else {
    let currentNode = root;
    while (currentNode) {
      if (currentNode.val < val) {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode(val);
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (currentNode.left === null) {
          currentNode.left = new TreeNode(val);
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var a = new TreeNode(4);
var b = new TreeNode(2);
var c = new TreeNode(7);
var d = new TreeNode(1);
var e = new TreeNode(3);
a.left = b;
a.right = c;
b.left = 1;
b.right = 3;
console.log(insertIntoBST(a, 5));
