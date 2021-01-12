// Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means only push to back, peek/pop from front, size, and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue), as long as you use only a queue's standard operations.

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.stack = [];
  this.length = 0;
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack[this.length] = x;
  this.length += 1;
  return undefined;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.length === 0) return undefined;
  var last = this.stack[this.length - 1];
  this.stack.length -= 1;
  this.length -= 1;
  return last;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.length === 0) return undefined;
  return this.stack[this.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.length === 0;
};

// Your MyStack object will be instantiated and called as such:
var obj = new MyStack();
obj.push(2);
var param_2 = obj.pop();
var param_3 = obj.top();
var param_4 = obj.empty();
