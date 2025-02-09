// my implementation of a linked list

class NewNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new NewNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        let newHead = new NewNode(value);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
    }

    insert(value, index) {
        if (index >= this.length) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        } else {
            // insert
            let position = 0;

            let previous;
            let current = this.head;
            // pointer looking at node
            // pointer looking at next node
            // index = 2
            // [10, 15, 20]
            while (position < index) {
                previous = current;
                current = current.next;
                position++;
            }
        }
    }

    nodes() {
        let currentNode = this.head;

        let nodesList = [];

        while (currentNode !== null) {
            nodesList.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodesList;
    }
}

const myLinkedList = new LinkedList(1);



myLinkedList.append(2);

myLinkedList.append(3);

myLinkedList.append(4);

myLinkedList.append(5);



console.log(myLinkedList.nodes());

myLinkedList.prepend(-1);

console.log(myLinkedList.nodes());


// console.log(`head is: ${myLinkedList.head.value}`)

// console.log(`head is: ${myLinkedList.head.value}`)