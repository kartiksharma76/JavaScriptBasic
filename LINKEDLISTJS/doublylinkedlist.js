class Node {
    constructor(data, next = null) {
        this.data = data;   // value of the node
        this.next = next;   // pointer to next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;   // first node
        this.tail = null;   // last node
        this.size = 0;      // number of nodes
    }
    
    /**
     * insert(data)
     * Algorithm:
     * 1. Create a new node with given data.
     * 2. If list is empty (head == null):
     *    - Make head and tail = new node.
     * 3. Else:
     *    - Attach node at tail (tail.next = node).
     *    - Move tail pointer to new node.
     * 4. Increase size by 1.
     * Time Complexity: O(1)
     */
    insert(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    /**
     * addFirst(data)
     * Algorithm:
     * 1. Create new node with data, point its next to head.
     * 2. Update head = new node.
     * 3. If list was empty, also set tail = node.
     * 4. Increase size.
     * Time Complexity: O(1)
     */
    addFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
        if (this.tail === null) this.tail = node;
        this.size++;
    }

    /**
     * addLast(data)
     * Algorithm:
     * 1. Create a new node.
     * 2. If list is empty → head = node.
     * 3. Else → traverse list to last node, attach new node.
     * 4. Update tail.
     * 5. Increase size.
     * Time Complexity: O(n) (because traversal)
     */
    addLast(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.tail = node;
        this.size++;
    }

    /**
     * addPosition(position, data)
     * Algorithm:
     * 1. Validate position (0 <= position <= size).
     * 2. If position = 0 → call addFirst.
     * 3. Else → traverse list until (position - 1).
     * 4. Insert node between temp and temp.next.
     * 5. Update tail if needed.
     * 6. Increase size.
     * Time Complexity: O(n)
     */
    addPosition(position, data) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }
        if (position === 0) {
            this.addFirst(data);
            return;
        }
        let temp = this.head;
        for (let i = 1; i < position; i++) {
            temp = temp.next;
        }
        const node = new Node(data, temp.next);
        temp.next = node;
        if (node.next === null) this.tail = node;
        this.size++;
    }

    /**
     * deleteByPosition(position)
     * Algorithm:
     * 1. Validate position (0 <= position < size).
     * 2. If position = 0 → call deleteFirst.
     * 3. Else:
     *    - Traverse list until (position - 1).
     *    - Skip node at position (temp.next = temp.next.next).
     * 4. If last node deleted, update tail.
     * 5. Decrease size.
     * Time Complexity: O(n)
     */
    deleteByPosition(position) {
        if (position < 0 || position >= this.size) {
            console.log("Invalid position");
            return;
        }
        if (position === 0) {
            this.deleteFirst();
            return;
        }
        let temp = this.head;
        for (let i = 0; i < position - 1; i++) {
            temp = temp.next;
        }
        temp.next = temp.next.next;
        if (temp.next === null) this.tail = temp;
        this.size--;
    }

    /**
     * deleteFirst()
     * Algorithm:
     * 1. If list empty → return.
     * 2. Move head to next node.
     * 3. If list becomes empty → tail = null.
     * 4. Decrease size.
     * Time Complexity: O(1)
     */
    deleteFirst() {
        if (!this.head) return;
        this.head = this.head.next;
        if (this.head === null) this.tail = null;
        this.size--;
    }

    /**
     * deleteLast()
     * Algorithm:
     * 1. If list empty → return.
     * 2. If only one node → head = tail = null.
     * 3. Else → traverse to second-last node.
     * 4. Make its next = null, update tail.
     * 5. Decrease size.
     * Time Complexity: O(n)
     */
    deleteLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.head;
            while (temp.next.next !== null) {
                temp = temp.next;
            }
            temp.next = null;
            this.tail = temp;
        }
        this.size--;
    }

    /**
     * middleNode()
     * Algorithm:
     * 1. Use two pointers slow and fast.
     * 2. Move slow by 1 step, fast by 2 steps.
     * 3. When fast reaches end, slow will be at middle.
     * 4. Return slow.data.
     * Time Complexity: O(n)
     */
    middleNode() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow ? slow.data : null;
    }

    /**
     * occurrence(data)
     * Algorithm:
     * 1. Initialize count = 0.
     * 2. Traverse list.
     * 3. If node.data == data → count++.
     * 4. Return count.
     * Time Complexity: O(n)
     */
    occurrence(data) {
        let count = 0;
        let temp = this.head;
        while (temp !== null) {
            if (temp.data === data) count++;
            temp = temp.next;
        }
        return count;
    }

    /**
     * moveLastToFront()
     * Algorithm:
     * 1. If list has < 2 nodes → do nothing.
     * 2. Traverse to second-last node.
     * 3. Detach last node, update tail.
     * 4. Attach last node in front (before head).
     * 5. Update head = last.
     * Time Complexity: O(n)
     */
    moveLastToFront() {
        if (!this.head || !this.head.next) return;
        let secondLast = this.head;
        while (secondLast.next !== this.tail) {
            secondLast = secondLast.next;
        }
        let last = this.tail;
        secondLast.next = null;
        this.tail = secondLast;
        last.next = this.head;
        this.head = last;
    }

    /**
     * contains(data)
     * Algorithm:
     * 1. Traverse list node by node.
     * 2. If node.data == data → return true.
     * 3. If traversal ends → return false.
     * Time Complexity: O(n)
     */
    contains(data) {
        let temp = this.head;
        while (temp !== null) {
            if (temp.data === data) return true;
            temp = temp.next;
        }
        return false;
    }

    /**
     * print()
     * Algorithm:
     * 1. Traverse list from head.
     * 2. Print each node's data.
     * Time Complexity: O(n)
     */
    print() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    /**
     * getSize()
     * Algorithm:
     * Return current size.
     * Time Complexity: O(1)
     */
    getSize() {
        return this.size;
    }
}

// Example usage
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.addFirst(5);
list.addLast(40);
list.addPosition(2, 15);
list.print();  // Output: 5, 10, 15, 20, 30, 40
console.log("Middle:", list.middleNode());  // 20
console.log("Contains 30?", list.contains(30));  // true
console.log("Occurrence of 10:", list.occurrence(10));  // 1
list.moveLastToFront();
list.print();
