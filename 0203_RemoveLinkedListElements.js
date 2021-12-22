/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null || head.val === null) return head;
  var current = head;
  var prev = current;

  while (current) {
    if (current.val === val) {
      // 刪除節點
      prev.next = current.next;
      current = prev.next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  // 極端情況: 第一個值就是指定要刪除的值
  if (head.val === val) {
    head = head.next;
    return head;
  }

  return head;
};

// var a = new ListNode(1);
// var b = new ListNode(2);
// var c = new ListNode(6);
// var d = new ListNode(3);
// var e = new ListNode(4);
// var f = new ListNode(5);
// var g = new ListNode(6);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;
var a = new ListNode(7);
var b = new ListNode(7);
var c = new ListNode(7);
var d = new ListNode(7);
a.next = b;
b.next = c;
c.next = d;
console.log(removeElements(a, 7));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
