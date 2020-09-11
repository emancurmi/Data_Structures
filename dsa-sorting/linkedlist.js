class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    display() {
        if (this.head !== null) {
            let tempNode = this.head;
            while (tempNode) {
                console.log(tempNode.value);
                tempNode = tempNode.next;
            }
        }
        else {
            console.log("List is Empty");
        }
    }

    size() {
        let pointer = 0;
        if (this.head !== null) {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
                pointer++;
            }
        }
        return pointer;
    }

    isEmpty() {
        return (this.head !== null) ? false : true;
    }

    findPrevious(item) {
        let tempNode = this.head;
        while (tempNode.next.value !== item.value) {
            return tempNode.next;
        }
    }

    findLast() {
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        return tempNode;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, beforeitem) {
        let _beforeitem = this.find(beforeitem)
        if (_beforeitem.head === null) {
            throw new Error("Empty List");
        }
        else {
            let tempNode = this.head;
            while (tempNode.next.value !== _beforeitem.value) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, _beforeitem);
        }
    }

    insertAfter(item, afteritem) {
        let _afteritem = this.find(afteritem)

        if (_afteritem.head === null) {
            throw new Error("Empty List");
        }
        else {
            let newnode = new _Node(item);
            newnode.next = _afteritem.next;
            _afteritem.next = newnode;
        }
    }

    insertAt(item, index) {
        let pointer = 1;
        let tempNode = this.head;
        while (tempNode.next !== null && index >= 0 && pointer < index) {
            tempNode = tempNode.next;
            pointer++;
        }

        let newnode = new _Node(item);
        newnode.next = tempNode.next;
        tempNode.next = newnode;
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    reverse() {
        if (!this.head || !this.head.next) return null;

        var p1 = null;
        var p2 = this.head;
        var p3;

        while (p2) {
            p3 = p2.next;
            p2.next = p1;
            p1 = p2;
            p2 = p3;
        }

        this.head = p1;
    }

    middle() {
        if (!this.head) return null;
        let fastpointer = this.head.next;
        let slowpointer = this.head;
        while (fastpointer != null) {
            fastpointer = fastpointer.next;
            if (fastpointer != null) {
                slowpointer = slowpointer.next;
                fastpointer = fastpointer.next;
            }
        }
        return slowpointer;
    }

    sort() {

        if (!this.head) return null; //boomer apollo helo
        //head node

        let current = this.head; //boomer

        while (current !== null) {
            let compare = current.next; //apollo
            while (compare !== null) {
                if (current.value > compare.value) //boomer < apolo
                {
                    //switching node of current and comapare
                    let temp = current.value; //next boomer
                    current.value = compare.value; //value : boomer : apollo
                    compare.value = temp; // value : apollo : boomer
                }
                console.log(current.next);
                compare = compare.next; //apolo
            }
            current = current.next; // boomer
        }
    }
}

module.exports = LinkedList;