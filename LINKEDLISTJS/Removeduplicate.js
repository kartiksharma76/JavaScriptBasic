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
    removeDuplicate() {
        let temp = this.head;
        while (temp && temp.next) {
            if (temp.data === temp.next.data) {
                temp.next = temp.next.next;
            } else {
                temp = temp.next;
            }

        }
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
list.insert(2);
list.insert(3);
list.insert(3);
list.insert(4);

list.removeDuplicate();
list.print();