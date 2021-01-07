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
    queue.push(current);
    current = current.next;
  }
  head = queue.shift();
  current = head;
  const queueLen = queue.length;
  for (let i = 0; i < queueLen; i++) {
    if (i % 2 === 0) {
      current.next = queue.pop();
    } else {
      current.next = queue.shift();
    }
    current = current.next;
  }
  current.next = null;
  return head;
};
// 如果 head 本身為 null，或是 head 是沒有 next 的 listNode 就回傳 head
// 宣告 queue []
// 宣告 current 為 head
// 當 current 不為 null
//   將 current 放進 queue
//   current 指向下一個節點
// 將第一個節點給 head
// current 變成 head
// 宣告 queueLen 為 queue 長度(因為 queue 會直接被改變)
// 遍歷 queueLen
//   如果目前 i 是偶數
//     就把 queue 最後面給 current 下一個節點
//   否則
//     把 queue 最前面給 current 下一個節點
//   current 指向下一個節點
// 將 current.next 指向 null
// return head 可以無視，只是我 debug 用的
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
