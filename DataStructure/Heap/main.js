class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(elem){
        this.values.push(elem);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const elem = this.values[idx];

        while(idx > 0){
            let parentIdx = idx-1>>1;
            let parent = this.values[parentIdx];
            if(elem <= parent){break;}
            this.values[parentIdx] = elem;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax(){
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
                if(leftChild > elem){
                    swap = LeftChildIdx;
                }
            }

            if(RightChildIdx < length){
                rightChild = this.values[RightChildIdx];
                if(
                    (swap === null && rightChild > elem) ||
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(45);
heap.insert(65);
heap.insert(15);
heap.insert(35);
heap.insert(75);
heap.insert(85);

console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
