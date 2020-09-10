class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek(){
        return (this.top !== null) ? this.top.data : null;
    }

    isEmpty(){
    return (!this.top) ? true :  false;
    };

    display(){
        
    }

}

function is_palindrome(s) {
    let input = new Stack();

    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    for(let i=0; i < s.length; i++)
    {
        input.push(s[i]);
    }

    index = 0;
    match = 0;

    while(!input.isEmpty())
    {
        if (input.pop() == s[index]) 
        {
             match++;
        } 
        index ++;
    }

    return (match == s.length)? true : false;
}

function parenthese_match(s){
    let stack = new Stack();

    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
        '"' : '"',
        "'" : "'"
    }

   
    for (let i = 0; i < s.length; i++) {

        // If character is an opening brace add it to a stack
        if (s[i] === '(' || s[i] === '{' || s[i] === '[' || s[i] === '"' || s[i] === "'") {
            stack.push(s[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.peek();
            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (s[i] === map[last]) { stack.pop(); } else { return false; }
        }
    }
    // By the completion of the for loop after checking all the brackets of the s, at the end, if the stack is not empty then fail
        if (stack.peek() !== null) {return false};

    return true;
}

function main(){
    let startTrek = new Stack();
    
    (startTrek.peek() !== null) ? console.log(startTrek.peek()): console.log("List is Empty");

    startTrek.push("Kirk");
    startTrek.push("Spock");
    startTrek.push("McCoy");
    startTrek.push("Scotty");
    
    (startTrek.peek() !== null) ? console.log(startTrek.peek()): console.log("List is Empty");

    console.log(startTrek.isEmpty());

    //startTrek.peek();
}

//stacks main functions

////>>> main();

//check for palindromes
function palindromes_test(){
    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"))
    console.log(is_palindrome("Tauhida"));
}

////>>> palindromes_test();

//check matching parentheses
function parenthese_test(){
    console.log(parenthese_match("(){}")); // returns true
    console.log(parenthese_match("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
    console.log(parenthese_match("({(()))}}"));  // returns false
}

////>>>
parenthese_test();