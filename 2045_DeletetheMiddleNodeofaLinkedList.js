/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (!head.next) {
    head = null;
    return head;
  }
  var nodeLen = 0;
  var current = head;
  while (current) {
    nodeLen++;
    current = current.next;
  }
  var targetLen = ((nodeLen / 2) | 0) + 1;
  var current = head;
  var prev = current;
  while (targetLen) {
    if (targetLen === 1) {
      // 刪除節點
      prev.next = current.next;
      break;
    } else {
      prev = current;
      current = current.next;
      targetLen--;
    }
  }
  return head;
};

var a = new ListNode(1);
var b = new ListNode(3);
var c = new ListNode(4);
var d = new ListNode(7);
var e = new ListNode(1);
var f = new ListNode(2);
var g = new ListNode(6);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
console.log(deleteMiddle(a));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
