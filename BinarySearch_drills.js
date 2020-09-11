const Tree = require('./BinarySearchTree');

function main() {
    let BST = new Tree();

    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);

    // BST.insert('E');
    // BST.insert('A');
    // BST.insert('S');
    // BST.insert('Y');
    // BST.insert('Q');
    // BST.insert('U');
    // BST.insert('E');
    // BST.insert('S');
    // BST.insert('T');
    // BST.insert('I');
    // BST.insert('O');
    // BST.insert('N');

    return BST
}

function balancedBST(tree) {
    let leftHeight = 0
    let rightHeight = 0

    function maxDepth(tree) {
        if(!tree) {
            return 0
        }
    
        let left = 0
        let right = 0
    
        if(!tree.left && !tree.right) return 1
        
        if(tree.left) {
            left = maxDepth(tree.left)
        }
    
        if(tree.right) {
            right = maxDepth(tree.right)
        }
        console.log(Math.max(left, right) + 1)
        return Math.max(left, right) + 1
    }

    leftHeight = maxDepth(tree.left)
    rightHeight = maxDepth(tree.right)
    return leftHeight === rightHeight
}

function validBST(tree, min=-Infinity, max=Infinity) {
    if (!tree) return 'empty tree'
    if(!tree.key < min || tree.key > max) return false

    if(tree.left && !validBST(tree.left, min, tree.key)) return false
    if (tree.right && !validBST(tree.right, tree.key, max)) return false
    return true
}

let BST = main();
let balancedTree = new Tree()
balancedTree.insert(3)
balancedTree.insert(1)
balancedTree.insert(4)
balancedTree.insert(2)
balancedTree.insert(5)
console.log(balancedBST(BST))
// console.log(BST)