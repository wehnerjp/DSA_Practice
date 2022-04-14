class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let comparator = this.root;
    while (true) {
      if (newNode.value == comparator.value) return ++comparator.count;
      if (newNode.value > comparator.value) {
        if (comparator.right === null) {
          comparator.right = newNode;
          return this;
        }
        comparator = comparator.right;
      } else {
        if (comparator.left === null) {
          comparator.left = newNode;
          return this;
        }
        comparator = comparator.left;
      }
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let comparator = this.root;
    while (comparator) {
      if (value > comparator.value) {
        comparator = comparator.right;
      } else if (value < comparator.value) {
        comparator = comparator.left;
      } else {
        return true;
      }
    }
    return false;
  }
}

let testBST = new BST();
testBST.insert(4);
testBST.insert(3);
testBST.insert(7);
testBST.insert(6);
console.log(testBST);
console.log("3: ", testBST.contains(3));
console.log("5: ", testBST.contains(5));
