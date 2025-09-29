class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insert(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    addMid(position, data) {
        if (position < 1 || position > this.size + 1) {
            console.log("Invalid position");
            return;
        }
        const node = new Node(data);
        if (position === 1) {
            node.next = this.head;
            this.head = node;
            if (!this.tail) this.tail = node;
        } else {
            let temp = this.head;
            for (let i = 1; i < position - 1; i++) {
                temp = temp.next;
            }
            node.next = temp.next;
            temp.next = node;
        }
        this.size++;
    }
    print() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(4);
list.insert(5);

list.addMid(3, 3);

list.print();