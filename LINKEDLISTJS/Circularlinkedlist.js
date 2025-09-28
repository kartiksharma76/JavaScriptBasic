class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * insert(data)
     * Algorithm:
     * 1. Create a new node.
     * 2. If list empty → head = tail = node, node.next = head.
     * 3. Else → tail.next = node, tail = node, tail.next = head.
     * 4. Increase size.
     * Time Complexity: O(1)
     */
    insert(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            node.next = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
            this.tail.next = this.head;
        }
        this.size++;
    }

    /**
     * addFirst(data)
     * Algorithm:
     * 1. Create a new node.
     * 2. If list empty → head = tail = node, node.next = head.
     * 3. Else → node.next = head, head = node, tail.next = head.
     * 4. Increase size.
     * Time Complexity: O(1)
     */
    addFirst(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            node.next = this.head;
        } else {
            node.next = this.head;
            this.head = node;
            this.tail.next = this.head;
        }
        this.size++;
    }

    /**
     * addPosition(position, data)
     * Algorithm:
     * 1. Validate position.
     * 2. If position=0 → addFirst.
     * 3. If position=size → insert (at end).
     * 4. Else → traverse to (position-1), insert new node.
     * 5. Increase size.
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
        if (position === this.size) {
            this.insert(data);
            return;
        }

        let temp = this.head;
        for (let i = 1; i < position; i++) {
            temp = temp.next;
        }
        const node = new Node(data);
        node.next = temp.next;
        temp.next = node;
        this.size++;
    }

    /**
     * deleteFirst()
     * Algorithm:
     * 1. If empty → return null.
     * 2. If only one node → head=tail=null.
     * 3. Else → head=head.next, tail.next=head.
     * 4. Decrease size.
     * Time Complexity: O(1)
     */
    deleteFirst() {
        if (!this.head) return null;

        const deletedData = this.head.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        this.size--;
        return deletedData;
    }

    /**
     * deleteLast()
     * Algorithm:
     * 1. If empty → return null.
     * 2. If only one node → head=tail=null.
     * 3. Else → traverse to second-last, update tail.
     * 4. Decrease size.
     * Time Complexity: O(n)
     */
    deleteLast() {
        if (!this.head) return null;

        const deletedData = this.tail.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.head;
            while (temp.next !== this.tail) {
                temp = temp.next;
            }
            temp.next = this.head;
            this.tail = temp;
        }
        this.size--;
        return deletedData;
    }

    /**
     * deleteByPosition(position)
     * Algorithm:
     * 1. Validate position.
     * 2. If position=0 → deleteFirst.
     * 3. If position=size-1 → deleteLast.
     * 4. Else → traverse to (position-1), skip next node.
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
        if (position === this.size - 1) {
            this.deleteLast();
            return;
        }

        let temp = this.head;
        for (let i = 1; i < position; i++) {
            temp = temp.next;
        }
        temp.next = temp.next.next;
        this.size--;
    }

    /**
     * contains(data)
     * Algorithm:
     * 1. Traverse once around circle.
     * 2. If node.data == data → return true.
     * 3. Else return false.
     * Time Complexity: O(n)
     */
    contains(data) {
        if (!this.head) return false;
        let temp = this.head;
        do {
            if (temp.data === data) return true;
            temp = temp.next;
        } while (temp !== this.head);
        return false;
    }

    /**
     * occurrence(data)
     * Algorithm:
     * 1. Initialize count=0.
     * 2. Traverse once around circle.
     * 3. If node.data==data → count++.
     * 4. Return count.
     * Time Complexity: O(n)
     */
    occurrence(data) {
        if (!this.head) return 0;
        let count = 0;
        let temp = this.head;
        do {
            if (temp.data === data) count++;
            temp = temp.next;
        } while (temp !== this.head);
        return count;
    }

    /**
     * middleNode()
     * Algorithm:
     * 1. Use slow & fast pointers.
     * 2. Move slow=1 step, fast=2 steps.
     * 3. Stop when fast reaches head again (loop complete).
     * 4. Return slow.data.
     * Time Complexity: O(n)
     */
    middleNode() {
        if (!this.head) return null;
        let slow = this.head;
        let fast = this.head;
        while (fast.next !== this.head && fast.next.next !== this.head) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }

    /**
     * moveLastToFront()
     * Algorithm:
     * 1. If size<2 → do nothing.
     * 2. Traverse to second-last node.
     * 3. Detach last, update tail.
     * 4. Insert last before head.
     * 5. Update head.
     * Time Complexity: O(n)
     */
    moveLastToFront() {
        if (!this.head || this.head === this.tail) return;

        let secondLast = this.head;
        while (secondLast.next !== this.tail) {
            secondLast = secondLast.next;
        }

        let last = this.tail;
        secondLast.next = this.head;
        this.tail = secondLast;

        last.next = this.head;
        this.head = last;
        this.tail.next = this.head;
    }

    /**
     * print()
     * Algorithm:
     * 1. Start from head.
     * 2. Do-while loop until we come back to head.
     * 3. Print data.
     * Time Complexity: O(n)
     */
    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let temp = this.head;
        let result = [];
        do {
            result.push(temp.data);
            temp = temp.next;
        } while (temp !== this.head);
        console.log(result.join(" -> "));
    }

    getSize() {
        return this.size;
    }
}

// Example usage
const clist = new CircularLinkedList();
clist.insert(10);
clist.insert(20);
clist.insert(30);
clist.addFirst(5);
clist.addPosition(2, 15);
clist.print();  // 5 -> 10 -> 15 -> 20 -> 30
console.log("Middle:", clist.middleNode());  // 15
console.log("Contains 30?", clist.contains(30));  // true
console.log("Occurrence of 10:", clist.occurrence(10));  // 1
clist.moveLastToFront();
clist.print();  // 30 -> 5 -> 10 -> 15 -> 20
