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

    contains(data) {
        let temp = this.head; 
        while (temp) {
            if (temp.data === data) return true;
            temp = temp.next;
        }
        return false;
    }

    isLengthEven() {
        return this.size % 2 === 0;
    }

    countEvenElements() { 
        let count = 0;
        let temp = this.head;
        while (temp) {
            if (temp.data % 2 === 0) count++;
            temp = temp.next;
        }
        return count;
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
list.insert(3);
list.insert(4);

list.print();                     // 1 2 3 4
console.log("Size:", list.size);  // 4
console.log("Length even?", list.isLengthEven()); // true
console.log("Even elements:", list.countEvenElements()); // 2
