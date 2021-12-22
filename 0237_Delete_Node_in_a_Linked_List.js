/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 只要把當下節點的改成下一個節點就好
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

var a = new ListNode(4);
var b = new ListNode(5);
var c = new ListNode(1);
var d = new ListNode(9);
a.next = b;
b.next = c;
c.next = d;
console.log(deleteNode(b));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
