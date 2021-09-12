class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        // Remove item from the end, move tail over to previous item
        // Edge case where there are no items in the LinkedList or there is only one
        let pre
        let temp
        if(!this.head) return undefined
        else if(LinkedList.length == 1) {
            this.head = null
            this.tail = null
            this.length = 0

        }
        else {
            temp = this.head
            while(temp.next != null){
                pre = temp
                temp = temp.next
            }
            pre.next = null
            this.tail = pre
            console.log(this)
            console.log(temp)
            return temp

        }
    }
}

let myLinkedList = new LinkedList(7)
myLinkedList.push(4)
console.log(myLinkedList)
myLinkedList.pop();
console.log(myLinkedList)
