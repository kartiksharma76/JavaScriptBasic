// Node class
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this._size = 0;
    }

    /**
     * enqueue(data)
     * Algorithm:
     * 1. Create new node.
     * 2. If queue empty → front = rear = node.
     * 3. Else → rear.next = node, rear = node.
     * 4. Increase size.
     * Time: O(1)
     */
    enqueue(data) {
        const node = new Node(data);
        if (!this.rear) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this._size++;
    }

    /**
     * dequeue()
     * Algorithm:
     * 1. If queue empty → return null.
     * 2. Save front.data, front = front.next.
     * 3. If front becomes null → rear = null.
     * 4. Decrease size, return data.
     * Time: O(1)
     */
    dequeue() {
        if (!this.front) {
            console.log("Queue Underflow!");
            return null;
        }
        const data = this.front.data;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this._size--;
        return data;
    }

    /**
     * peek()
     * Algorithm: Return front.data if queue not empty else null
     * Time: O(1)
     */
    peek() {
        if (!this.front) {
            console.log("Queue is empty");
            return null;
        }
        return this.front.data;
    }

    /**
     * isEmpty()
     */
    isEmpty() {
        return this.front === null;
    }

    /**
     * size()
     */
    size() {
        return this._size;
    }

    /**
     * print()
     */
    print() {
        let temp = this.front;
        const elements = [];
        while (temp) {
            elements.push(temp.data);
            temp = temp.next;
        }
        console.log(elements.join(" -> "));
    }

    /**
     * countOccurrence(data)
     */
    countOccurrence(data) {
        let count = 0;
        let temp = this.front;
        while (temp) {
            if (temp.data === data) count++;
            temp = temp.next;
        }
        return count;
    }

    /**
     * removeByPosition(position)
     */
    removeByPosition(position) {
        if (position < 0 || position >= this._size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.dequeue();
            return;
        }

        let temp = this.front;
        for (let i = 0; i < position - 1; i++) {
            temp = temp.next;
        }
        temp.next = temp.next.next;

        if (position === this._size - 1) {
            this.rear = temp;
        }

        this._size--;
    }

    /**
     * findMiddle()
     */
    findMiddle() {
        let slow = this.front;
        let fast = this.front;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow ? slow.data : null;
    }

    /**
     * contains(data)
     */
    contains(data) {
        let temp = this.front;
        while (temp) {
            if (temp.data === data) return true;
            temp = temp.next;
        }
        return false;
    }

    /**
     * removeLast()
     */
    removeLast() {
        if (!this.front) {
            console.log("Queue is empty");
            return;
        }

        if (!this.front.next) {
            this.front = this.rear = null;
        } else {
            let temp = this.front;
            while (temp.next && temp.next.next) {
                temp = temp.next;
            }
            temp.next = null;
            this.rear = temp;
        }

        this._size--;
    }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();  // 10 -> 20 -> 30

console.log("Peek:", queue.peek()); // 10
console.log("Dequeue:", queue.dequeue()); // 10
queue.print(); // 20 -> 30

console.log("Size:", queue.size()); // 2
console.log("Contains 20?", queue.contains(20)); // true
console.log("Middle:", queue.findMiddle()); // 20

queue.enqueue(40);
queue.print(); // 20 -> 30 -> 40
queue.removeLast();
queue.print(); // 20 -> 30
queue.removeByPosition(1);
queue.print(); // 20
