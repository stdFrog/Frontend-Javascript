class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(elem, priority){
        let newNode = new Node(elem, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const elem = this.values[idx];

        while(idx > 0){
            let parentIdx = idx-1>>1;
            let parent = this.values[parentIdx];
            if(elem.priority <= parent.priority){break;}
            this.values[parentIdx] = elem;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown(){
        let idx = 0;
        const length = this.values.length;
        const elem = this.values[0];

        while(true){
            let LeftChildIdx = idx * 2 + 1;
            let RightChildIdx = LeftChildIdx + 1;
            let leftChild, rightChild;
            let swap = null;

            if(LeftChildIdx < length){
                leftChild = this.values[LeftChildIdx];
                if(leftChild.priority > elem.priority){
                    swap = LeftChildIdx;
                }
            }

            if(RightChildIdx < length){
                rightChild = this.values[RightChildIdx];
                if(
                    (swap === null && rightChild.priority > elem.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                    )
                {
                    swap = RightChildIdx;
                }
            }
            
            if(swap === null){break;}
            this.values[idx] = this.values[swap];
            this.values[swap] = elem;
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();

ER.enqueue("Common Cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);

console.log(ER.values);
