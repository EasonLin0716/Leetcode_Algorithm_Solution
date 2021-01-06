/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null) return head;
  if (head.next === null) return head;
  const queue = [];
  let current = head;
  while (current !== null) {
    queue.push(current.val);
    current = current.next;
  }
  head = new ListNode(queue.shift());
  current = head;
  const queueLen = queue.length;
  for (let i = 0; i < queueLen; i++) {
    if (i % 2 === 0) {
      current.next = new ListNode(queue.pop());
    } else {
      current.next = new ListNode(queue.shift());
    }
    current = current.next;
  }
  current.next = null;
  return head;
};
// var reorderList = function (head) {
//   if (head === null) return head;
//   if (head.next === null) return head;
//   const queue = [];
//   let current = head;
//   while (current !== null) {
//     queue.push(current);
//     current = current.next;
//   }
//   const queueLength = queue.length;
//   current = head;
//   for (let i = 0; i < queueLength; i++) {
//     if (i % 2 === 0) {
//       current.next = queue.shift();
//     } else {
//       current.next = queue.pop();
//     }
//     current = current.next;
//   }
//   current.next = null;
//   console.log(head);
//   return current;
// };
var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;
console.log(reorderList(a));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
