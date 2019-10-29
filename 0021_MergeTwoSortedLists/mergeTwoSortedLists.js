/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
https://skyyen999.gitbooks.io/-leetcode-with-javascript/content/questions/21md.html

須先了解"鏈結串列"

解法:
1. 宣告一個 ListNode result
2. 宣告一個 current 代表目前 Node 位置
3. 用一個 while 去 loop l1 & l2
4. 如果 l1 節點的值比 l2 大就存到 current 節點並移到下一位
5. 反之
6. 比較完畢後其中一邊若還有值就全部放到 current 節點
*/
var mergeTwoLists = function (l1, l2) {
  // 1. 宣告一個 ListNode result
  let result = new ListNode(0)
  // 2. 宣告一個 current 代表目前 Node 位置
  let current = result
  // 3. 用一個 while 去 loop l1 & l2
  while (l1 !== null && l2 !== null) {
    // 4. 如果 l2 節點的值比 l1 小就存到 current 節點並移到下一位
    if (l1.val > l2.val) {
      current.next = l2
      l2 = l2.next
    } else {
      // 5. 反之
      current.next = l1
      l1 = l1.next
    }
    current = current.next
  }
  // 6. 比較完畢後其中一邊若還有值就全部放到 current 節點
  if (l1 !== null) {
    current.next = l1
  }

  if (l2 !== null) {
    current.next = l2
  }
  return result.next
};