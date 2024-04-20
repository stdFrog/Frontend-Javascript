class Node{
    constructor(val, priority){
        this.data = val;
        this.priority = priority;
    }
}

class Queue{
    constructor(){
        this.ar = [];
    }

    getParent(idx){
        return idx - 1 >> 1;
    }

    insert(val, priority){
        let newNode = new Node(val, priority);

        let current = this.ar.length;
        let parent = this.getParent(current);
    
        this.ar[current] = newNode;

        while(current > 0 && this.ar[current].priority > this.ar[parent].priority){
            let temp = this.ar[current];
            this.ar[current] = this.ar[parent];
            this.ar[parent] = temp;

            current = parent;
            parent = this.getParent(current);
        }
    }

    remove(){
        let parent = 0;
        let left = 1;
        let right = 2;
        let rear = this.ar.length-1;
        
        this.ar[parent] = this.ar[rear];
        this.ar.pop();

        while(1){
            let Select = 0;

            if(left >= this.ar.length){break;}
            if(right >= this.ar.length){Select = left;}
            else{
                if(this.ar[left].priority > this.ar[right].priority){
                    Select = left;
                }else{
                    Select = right;
                }
            }

            if(this.ar[Select].priority > this.ar[parent].priority){
                let temp = this.ar[Select];
                this.ar[Select] = this.ar[parent];
                this.ar[parent] = temp;

                parent = Select;
            }else{
                break;
            }

            left = parent * 2 + 1;
            right = left+1;
        }

        return this.ar[rear];
    }
}

let queue = new Queue();

queue.insert("Common Cold", 1);
queue.insert("gunshot wound", 5);
queue.insert("FLU", 4);
queue.insert("broken arm", 4);

console.log(queue.ar);
queue.remove();
console.log(queue.ar);
queue.remove();
console.log(queue.ar);
queue.remove();
console.log(queue.ar);
queue.remove();
console.log(queue.ar);
