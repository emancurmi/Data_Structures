const bst = require('./bst');

function main() {
    const myBst = new bst();

    let data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

    data.forEach(int => myBst.insert(int, int))

    console.log('Pre-Order: ' + myBst.preOrder());
    console.log('In-Order: ' + myBst.inOrder());
    console.log('Post-Order: ' + myBst.postOrder());
}

main();