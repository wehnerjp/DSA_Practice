class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // Remove item from the end, move tail over to previous item
    // Edge case where there are no items in the LinkedList or there is only one
    let pre;
    let temp;
    if (!this.head) return undefined;
    temp = this.head;
    pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log(this);
    console.log(temp);
    return temp;
  }
  unshift(value) {
    // create a new node, set head to new node, if empty head and tail equal new node
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.length++;
    return this;
  }
  shift() {
    // create a new node, set head to new node, if empty head and tail equal new node
    if (!this.head) return undefined;
    let removedItem = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = this.head;
    removedItem.next = null;
    this.length--;
    return removedItem;
  }
  get(index) {
    //   return item at the desired index
    if (index < 0 || index >= this.length) return undefined;
    let returnedItem = this.head;
    for (let i = 0; i < index; i++) returnedItem = returnedItem.next;
    return returnedItem;
  }
  set(index, value) {
    // set item at desired index to desired value
    if (this.get(index)) {
      this.get(index).value = value;
      return true;
    }
    return false;
  }
}

// let myLinkedList = new LinkedList(1);
// myLinkedList.push(2);
// myLinkedList.push(3);
// myLinkedList.push(4);

// console.log(myLinkedList);
// myLinkedList.pop();
// myLinkedList.unshift(0);
// myLinkedList.shift();
// console.log(myLinkedList.get(2));
// myLinkedList.set(2, 6);
// console.log(myLinkedList.get(2));
// console.log(myLinkedList);
