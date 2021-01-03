/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   if (!head) return null;
//   if (!head.next) return head;
//   let prev = null;
//   while (head) {
//     [head.next, prev, head] = [prev, head, head.next];
//   }
//   return prev;
// };
// recursive
// var reverseList = function (head, prev = null) {
//   if (!head) return prev;
//   let next = head.next; // 先把下一個記起來
//   head.next = prev; // 將自己反過來指向前一個
//   return reverseList(next, head);
// };
// stack
var reverseList = function (head) {
  if (head === null) return head;
  const stack = [];
  while (head !== null) {
    stack.push(head);
    head = head.next;
  }
  let current = stack.pop();
  head = current;
  while (stack.length) {
    current.next = stack.pop();
    current = current.next;
  }
  current.next = null;
  return head;
};

// tmp = a
// a = b
// b = c
// c = tmp
// [a, b, c] = [b, c, a]

function ListNode(val, next) {
  console.log(this);
  console.log(next);
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;

reverseList(a);
