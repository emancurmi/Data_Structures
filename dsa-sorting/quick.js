function swap(array, index, start) {
    const temp = array[index];
    array[index] = array[start];
    array[start] = temp;
}

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }

    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

function partition(array, start, end) {
    const pivot = array[end - 1];
    let s = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, s);
            s++;
        }
    }
    swap(array, end - 1, s);
    return s;
}

module.exports = quickSort;