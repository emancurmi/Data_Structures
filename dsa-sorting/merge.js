function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
} 


function merge(l, r, a) {
    let lI = 0;//left index
    let rI = 0; //right index
    let oI = 0;//output index

    while (lI < l.length && rI < r.length) {
        if (l[lI] < r[rI]) {
            a[oI] = l[lI];
            lI++;
        }
        else {
            a[oI] = r[rI];
            rI++;
        }
        oI++;
    }

    for (let i = lI; i < l.length; i++) {
        a[oI] = l[i];
        oI++;
    }

    for (let i = rI; i < r.length; i++) {
        a[oI] = r[i];
        oI++;
    }

    return a;

}

module.exports = mergeSort;