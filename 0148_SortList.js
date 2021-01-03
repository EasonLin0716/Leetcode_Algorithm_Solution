// Given the head of a linked list, return the list after sorting it in ascending order.
// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

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
var sortList = function (head) {
  if (!head) return head;
  const stack = [];
  while (head !== null) {
    stack.push(head.val);
    head = head.next;
  }
  stack.sort((a, b) => b - a);
  let current = new ListNode(stack.pop());
  head = current;
  while (stack.length) {
    current.next = new ListNode(stack.pop());
    current = current.next;
  }
  return head;
};

// 宣告 stack []
// 如果 head 為 null(falsy) 就回傳 head
// 當 head 不為空時
//   stack 推進 head 的 val
//   將 head 指向 head.next
// 將 stack desc 排序
// 宣告 current 為 new ListNode(stack 頂層並拿掉 stack)
// head = current (new ListNode)
// 當 stack 不為空時
//  current.next 為 new ListNode(stack 頂層並拿掉 stack)
//  current 指向下一個  // 此處 head 不再和 current 指向同一個物件
// 回傳 head

let a = new ListNode(2);
let b = new ListNode(4);
let c = new ListNode(1);
let d = new ListNode(3);
let e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;

sortList(a);

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
