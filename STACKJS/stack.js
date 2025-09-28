// Node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this._size = 0;
  }

  /**
   * push(data)
   * Algorithm:
   * 1. Create new node with data, point it to current top.
   * 2. Update top = new node.
   * 3. Increase size.
   * Time: O(1), Space: O(1)
   */
  push(data) {
    const node = new Node(data, this.top);
    this.top = node;
    this._size++;
  }

  /**
   * pop()
   * Algorithm:
   * 1. If stack empty → return null.
   * 2. Save top.data, move top = top.next.
   * 3. Decrease size, return data.
   * Time: O(1), Space: O(1)
   */
  pop() {
    if (!this.top) {
      console.log("Stack Underflow!");
      return null;
    }
    const data = this.top.data;
    this.top = this.top.next;
    this._size--;
    return data;
  }

  /**
   * peek()
   * Algorithm:
   * Return top.data if stack not empty, else null.
   * Time: O(1)
   */
  peek() {
    if (!this.top) {
      console.log("Stack is empty");
      return null;
    }
    return this.top.data;
  }

  /**
   * isEmpty()
   * Algorithm: check if top == null
   * Time: O(1)
   */
  isEmpty() {
    return this.top === null;
  }

  /**
   * size()
   * Algorithm: return size
   * Time: O(1)
   */
  size() {
    return this._size;
  }

  /**
   * print()
   * Algorithm: traverse nodes, print data
   * Time: O(n)
   */
  print() {
    let temp = this.top;
    let elements = [];
    while (temp) {
      elements.push(temp.data);
      temp = temp.next;
    }
    console.log(elements.join(" -> "));
  }

  /**
   * countOccurrence(data)
   * Algorithm: count how many nodes equal given data
   * Time: O(n)
   */
  countOccurrence(data) {
    let count = 0;
    let temp = this.top;
    while (temp) {
      if (temp.data === data) count++;
      temp = temp.next;
    }
    return count;
  }

  /**
   * findMiddle()
   * Algorithm:
   * Use slow & fast pointers.
   * When fast reaches end, slow is at middle.
   * Time: O(n)
   */
  findMiddle() {
    if (!this.top) return null;
    let slow = this.top;
    let fast = this.top;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }

  /**
   * contains(data)
   * Algorithm: traverse & check
   * Time: O(n)
   */
  contains(data) {
    let temp = this.top;
    while (temp) {
      if (temp.data === data) return true;
      temp = temp.next;
    }
    return false;
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print();  // 30 -> 20 -> 10

console.log("Peek:", stack.peek());   // 30
console.log("Pop:", stack.pop());     // 30
stack.print();                        // 20 -> 10

console.log("Size:", stack.size());   // 2
console.log("Contains 10?", stack.contains(10));  // true
console.log("Middle:", stack.findMiddle());       // 20
console.log("Occurrences of 10:", stack.countOccurrence(10)); // 1