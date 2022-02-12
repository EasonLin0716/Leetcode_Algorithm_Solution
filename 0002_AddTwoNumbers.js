/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l1Num = reverseString(nodeToString(l1));
  const l2Num = reverseString(nodeToString(l2));
  // TODO: 解決數字大於 2^53 - 1 問題
  const resStr = reverseString(add(l1Num, l2Num));

  const head = new ListNode(resStr[0]);
  let current = head;
  for (let i = 1; i < resStr.length; i++) {
    current.next = new ListNode(resStr[i]);
    current = current.next;
  }
  return head;
};

function add(A, B) {
  const AL = A.length;
  const BL = B.length;
  const ML = Math.max(AL, BL);

  let carry = 0,
    sum = "";

  for (let i = 1; i <= ML; i++) {
    let a = +A.charAt(AL - i);
    let b = +B.charAt(BL - i);

    let t = carry + a + b;
    carry = (t / 10) | 0;
    t %= 10;

    sum = i === ML && carry ? carry * 10 + t + sum : t + sum;
  }

  return sum;
}

function nodeToString(node) {
  let str = "";
  let current = node;
  while (current) {
    str += current.val;
    current = current.next;
  }
  return str;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
