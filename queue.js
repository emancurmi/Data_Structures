class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }

   peek(){
        let node = null;
        if(this.first !== null){
            node = this.first;
        }
        return node;
   }

   isEmpty(){
        return (this.first === null)? true : false;
   }

   display(){
       while(this.first !== undefined){
        console.log(this.first.data)
        this.first = this.first.next;
       }
   }

   remove(item){
        // If the list is empty
        if (!this.first) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.first.data === item) {
            this.first = this.first._Node;
            return;
        }
        // Start at the head
        let currNode = this.first;
        // Keep track of previous
        let previousNode = this.first;

        while ((currNode !== null) && (currNode.data !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode._Node;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
   }

}

function main(){
    let starTrekQ = new Queue();
    starTrekQ.enqueue("Kirk")
    starTrekQ.enqueue("Spock")
    starTrekQ.enqueue("Uhura")
    starTrekQ.enqueue("Sulu");
    console.log(starTrekQ.peek());
    console.log(starTrekQ.isEmpty());
    starTrekQ.display();
}

main();