// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
// Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.queue = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  var len = this.queue.length;
  for (var i = len; i > 0; i--) {
    this.queue[i] = this.queue[i - 1];
  }
  this.queue[0] = x;
  return undefined;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  var len = this.queue.length;
  if (len === 0) return undefined;
  var last = this.queue[len - 1];
  this.queue.length -= 1;
  return last;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  var len = this.queue.length;
  if (len === 0) return undefined;
  return this.queue[len - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};

const myQueue = new MyQueue();
var a = myQueue.push(1); // queue is: [1]
var b = myQueue.push(2);
var b = myQueue.push(3);
var b = myQueue.push(4); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue);
var c = myQueue.peek(); // return 1
var d = myQueue.pop(); // return 1, queue is [2]
var e = myQueue.empty(); // return false
console.log({ a, b, c, d, e });
