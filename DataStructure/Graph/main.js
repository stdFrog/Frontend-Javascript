class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v!==v1);
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacentcyList[vertex];
    }

    DFS(start){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex){return null;}
            visited[vertex] = true;

            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

    DFSIterative(start){
        const stack = [start];
        const result  = [];
        const visited = {};
        let current;
        
        visited[start] = true;
        while(stack.length){
            current = stack.pop();
            result.push(current);

            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    BFS(start){
        const queue = [start];
        const result = [];
        const visited = {};

        visited[start] = true;

        while(queue.length){
            let current = queue.shift();
            result.push(current);

            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("LA");
g.addEdge("Tokyo", "LA");

console.log(g.adjacencyList);

console.log(g.DFS("Tokyo"));
console.log(g.BFS("Tokyo"));
