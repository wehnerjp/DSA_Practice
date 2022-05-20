class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;
        return this;
    }
    reverse(){
        let next = this.head.next;
        let previous = null;
        let current = this.head;
        this.tail=this.head;
        while(next != null){
            console.log("current: ", current, "next: ", next, "previous: ", previous);
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        return this;
    }

}
let hamburger = new LinkedList("a");
hamburger.append("b");
hamburger.append("c");
hamburger.append("d");
hamburger.append("e");
hamburger.append("f");
hamburger.append("g");
console.log(hamburger);
hamburger.reverse();
console.log(hamburger);