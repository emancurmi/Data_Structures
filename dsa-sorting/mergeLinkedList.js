const LinkedList = require('./linkedlist');

function mergeSort(linkedlist) {
    let right = new LinkedList();
    let middleVal, middle;
    let size = linkedlist.size();
    linkedlist.display();

    if (size <= 1) {
        console.log('done');
        return linkedlist;
    }

    middleVal = linkedlist.MiddleOfList();
    middle = ssl.find(middleVal);

    console.log('Middle', middle.value);
    console.log('Left', linkedlist.head.value);

    right.head = middle.next;
    console.log('right', right.head.value);
    middle.next = null;

    right = mergeSort(right);
    left = mergeSort(left);
    return merge(left, right);
}

function merge(l, r) {
    if (l && r) {
        l.findLast().next = r.head;
        return sort(l);
    }
}

function sort(linkedlist) {
    let templ = new LinkedList();
    let length = linkedlist.size();
    let temp = 0;
    while (linkedlist.head !== null) {
        temp = linkedlist.pop();

        if (templ.head === null) {
            if (linkedlist.peek() < temp) {
                templ.push(linkedlist.pop());
                templ.push(temp);
            } else { templ.push(temp); }
        } else {
            while (temp < templ.peek()) {
                linkedlist.push(templ.pop());
                if (templ.head === null) break;
            }
            templ.push(temp);
        }
    }
    while (templ.head !== null) {
        linkedlist.push(templ.pop());
    }
    return linkedlist;
}

module.exports = mergeSort;