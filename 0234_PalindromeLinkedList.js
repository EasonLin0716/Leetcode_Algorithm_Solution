/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var ary = [];
  var current = head;
  while (current) {
    ary.push(current.val);
    current = current.next;
  }
  while (ary.length > 1) {
    var first = ary.pop();
    var last = ary.shift();
    if (first !== last) return false;
  }
  return true;
};
