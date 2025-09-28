class ArrayList {
  constructor() {
    this.items = [];
  }

  // Add element
  add(element) {
    this.items.push(element);
  }

  // Get element by index
  get(index) {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return null;
  }

  // Remove element by index
  remove(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  // Get size
  size() {
    return this.items.length;
  }

  // Print all elements
  print() {
    console.log(this.items);
  }
}

// Usage
let list = new ArrayList();
list.add(5);
list.add(10);
list.add(15);
console.log("Element at index 1:", list.get(1));
list.remove(1);
list.print();
console.log("Size:", list.size());
