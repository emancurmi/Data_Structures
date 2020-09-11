const LinkedList = require('./linkedlist');

function mergeSort(sll) {
    let right = new LinkedList();
    let middleVal, middle;
    let size = sll.size();
    sll.display();

    if (size <= 1) {
        console.log('ending');
        return sll;
    }

    middleVal = sll.MiddleOfList();
    middle = sll.find(middleVal);

    console.log('middle', middle.value);
    console.log('left', sll.head.value);

    right.head = middle.next;   //set middle.next to the beginning of the right side LL
    console.log('right', right.head.value);
    middle.next = null;        //break LL in half

    right = mergeSort(right)
    left = mergeSort(sll)
    return merge(left, right)
}

function merge(left, right) {

    if (left && right) {
        left.findLast().next = right.head;
        return sort(left);
    }

}

function sort(sll) {
    let tempList = new LinkedList();
    let length = sll.size();
    let temp = 0;

    while (sll.head !== null) {

        temp = sll.pop();

        if (tempList.head === null) {
            if (sll.peek() < temp) {
                tempList.push(sll.pop());
                tempList.push(temp);
            } else {
                tempList.push(temp);
            }
        } else {
            while (temp < tempList.peek()) {
                sll.push(tempList.pop());
                if (tempList.head === null) break;
            }
            tempList.push(temp);
        }
    }

    while (tempList.head !== null) {
        sll.push(tempList.pop());
    }

    return sll;
}

module.exports = mergeSort