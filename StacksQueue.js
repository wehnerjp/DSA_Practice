class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // Remove item from the end, move tail over to previous item
    // Edge case where there are no items in the LinkedList or there is only one
    if (length === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
};

module.exports = class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // Remove item from the end, move tail over to previous item
    // Edge case where there are no items in the LinkedList or there is only one
    if (this.length === 0) return undefined;
    let removedItem = this.first;
    if (this.length === 1) {
      this.first = null;
      this.length = null;
    } else {
      this.first = this.first.next;
      removedItem.next = null;
    }
    this.length--;
    return removedItem;
  }
};
