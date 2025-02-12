// my implementation of a linked list

// class for simple node
class NewNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// class for linked list
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    // append value
    append(value) {
        // create new node with given value
        let newNode = new NewNode(value);

        // update tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // prepend value
    prepend(value) {
        // create new node with given value
        let newHead = new NewNode(value);

        // update head
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
    }

    insert(value, index) {
        // if index is negative
        if (index < 0 ) {
            console.log('Index cannot be a negative integer.')
            return
        // if index exceeds length of list, append value
        } else if (index >= this.length) {
            this.append(value);
        // if provided index is 0
        } else if (index === 0) {
            this.prepend(value);
        // normal case
        } else {
            let position = 0;

            // set pointers
            let previousNode;
            let currentNode = this.head;

            // iterate over linked list until required position found
            while (position < index) {
                // move pointers one step forward
                previousNode = currentNode;
                currentNode = currentNode.next;
                position++;
            }

            // create new node with provided value
            let newNode = new NewNode(value);

            // insert new node
            previousNode.next = newNode;
            newNode.next = currentNode;

            // increment length of linked list
            this.length++;
        }
    }

    // deletes node at index provided as arg
    delete(index) {
        let position = 0;
        let previousNode;
        let currentNode = this.head;

        // if index is negative
        if (index < 0 ) {
            console.log('Index cannot be a negative integer.')
            return
        // if LL is empty
        } else if (this.isEmpty()) {
            return;
        // if given index exceeds length of LL
        } else if (index >= this.length) {
            console.log('Index of delete exceeds length of linked list.')
            return;
        // if index given is head of LL
        } else if (index === 0) {
            this.head = this.head.next;
            // check if LL has become empty
            if (this.head === null) {
                this.tail = null;
            }
        // normal case
        } else {
            // traverse list while looking for required index
            while (position !== index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                position++;
            }

            // if last element (tail) of LL is to be deleted
            if (index === this.length - 1) {
                //  update tail
                this.tail = previousNode;
                this.tail.next = null;
            // if index to be delete is NOT first or last of LL (normal case)
            } else {
                // delete node at index by switching pointer
                previousNode.next = currentNode.next;
            }
        }

        // decrement length of LL
        this.length--;
    }

    // returns array of objects of all nodes
    nodes() {
        // declare empty array for nodes
        let nodesList = [];

        if (this.isEmpty()) {
            return nodesList;
        }
        
        // set pointer
        let currentNode = this.head;

        // iterate over linked list, appending each node to array
        while (currentNode !== null) {
            nodesList.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodesList;
    }

    // returns true if LL is empty
    isEmpty() {
        return this.length === 0;
    }

    // return lengths of LL
    size() {
        return this.length;
    }

    // clears LL
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // converts LL to array
    toArray() {
        // declare empty array to store values of LL nodes
        let array = [];

        // set pointer to head
        let pointer = this.head;

        // traverse LL until tail is reached
        while (pointer !== null) {
            array.push(pointer.value);
            pointer = pointer.next;
        }

        return array;
    }

    // returns value at index of LL
    get(index) {
        // if index is < 0
        if (index < 0) {
            console.log('Index cannot be a negative integer.')
            return;
        // if index exceeds length of LL
        } else if (index > this.length - 1) {
            console.log('Index exceeds length of linked list.')
            return;
        // if index is 0
        } else if (index === 0) {
            return this.head.value;
        // normal case
        } else {
            let position = 0;

            // set pointer
            let pointer = this.head;

            // traverse LL, updating pointer and position
            while (position < index) {
                pointer = pointer.next;
                position++;
            }

            return pointer.value;
        }
    }

    find(value) {
        // if LL is empty
        if (this.isEmpty()) {
            console.log('Linked list is empty');
            return;
        // if LL is not empty
        } else {
            // set pointer and index
            let index = 0;
            let pointer = this.head;

            // traverse LL while it is not empty
            while (pointer !== null) {

                // if value is found
                if (pointer.value === value) {
                    return index
                }

                // update pointer and index
                pointer = pointer.next;
                index++;
            }
            
            // if value is not found 
            return null
        }
    }

    // reverses the LL
    reverse() {
        // check if LL is empty
        if (this.isEmpty()) {
            console.log('Cannot reverse empty linked list.')
            return
        // check if LL length is 1
        } else if (this.length === 1) {
            return
        }

        // assign starting pointers
        let pointerCurrent = this.head.next;
        let pointerAhead = pointerCurrent.next;
        let pointerPrevious = this.head;

        // update tail (previous head)
        this.tail = pointerPrevious
        this.tail.next = null;

        // traverse LL
        while (pointerAhead !== null) {
            // swap pointers
            pointerCurrent.next = pointerPrevious
            pointerPrevious = pointerCurrent
            pointerCurrent = pointerAhead
            pointerAhead = pointerAhead.next;
        }

        // perform final swap
        pointerCurrent.next = pointerPrevious;

        // update head
        this.head = pointerCurrent;
    }
}

