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

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){this.adjacencyList[vertex]= [];}
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
    }

    Dstra(start, end){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // to return at end
        let smallest;

        // build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }

            previous[vertex] = null;
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;

            if(smallest === end){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}


let g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.Dstra("A", "C"));
