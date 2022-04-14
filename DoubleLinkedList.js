class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

module.exports = class DoubleLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // Remove item from the end, move tail over to previous item
    // Edge case where there are no items in the LinkedList or there is only one
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    // create a new node, set head to new node, if empty head and tail equal new node
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    // remove the first node in the list, if head.next is empty then tail = head
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  get(index) {
    //   return item at the desired index
    if (index < 0 || index >= this.length) return undefined;
    let returnedItem;
    if(index < (this.length)/2) {
        returnedItem = this.head;
        for (let i = 0; i < index; i++) returnedItem = returnedItem.next;

    } else {
        returnedItem = this.tail;
        for (let i = this.length; i > index; i--) returnedItem = returnedItem.prev;
    }
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
    if (index === this.length) return this.push(value);
    if (index < 0 || index >= this.length) return false;

    const newNode = new Node(value);
    let before = this.get(index - 1);
    let after = before.next;
    before.next = newNode;
    newNode.prev = before.prev;
    newNode.next = after;
    after.prev = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    // remove item at desired index and decrement length

    if (index == 0) return this.shift();
    if(index === this.length -1) return this.pop();
    if (index < 0 || index >= this.length) return false;

    let temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    
    this.length--;
    return temp;
  }
  reverse() {
    if (1 >= this.length) return false;
    let placeholder = this.head;
    let bf = null;
    let pre;
    this.head = this.tail;
    this.tail = placeholder;
    for (let i = 0; i < this.length; i++) {
      pre = placeholder.next;
      placeholder.next = bf;
      bf = placeholder;
      placeholder = pre;
    }
    return true;
  }
};
