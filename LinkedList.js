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
    // remove the first node in the list, if head.next is empty then tail = head
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
  insert(index, value) {
    // insert item at desired index to desired value

    if (index == 0) return this.unshift(value);
    if (index < 0 || index >= this.length) return false;

    const newNode = new Node(value);
    newNode.next = this.get(index);

    let temp = this.get(index - 1);
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    // remove item at desired index and decrement length

    if (index == 0) return this.shift();
    if (index < 0 || index >= this.length) return false;

    let before = this.get(index - 1);
    let temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    if (1 >= this.length) return false;
    let currentNode = this.head;
    let nodeBefore = null;
    let priorNext;
    this.head = this.tail;
    this.tail = currentNode;
    for (let i = 0; i < this.length; i++) {
      priorNext = currentNode.next;
      currentNode.next = nodeBefore;
      nodeBefore = currentNode;
      currentNode = priorNext;
    }
    return true;
  }
  kLast(k) {
    if (1 >= this.length) return 0;
    let nodeArr = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      nodeArr.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodeArr[this.length - k];
  }
};
