class Graph {
    constructor(directed = false) {
        this.adjacencyList = new Map();
        this.directed = directed;
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList.get(v1).push(v2);
        if (!this.directed) {
            this.adjacencyList.get(v2).push(v1);
        }
    }

    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex) || [];
    }

    getVertices() {
        return Array.from(this.adjacencyList.keys());
    }
}

class AdvancedGraph extends Graph {
    constructor(directed = false) {
        super(directed);
    }

    hasCycle() {
        const visited = new Set();
        const recursionStack = new Set();
        const vertices = this.getVertices();

        for (let vertex of vertices) {
            if (this._hasCycleDFS(vertex, visited, recursionStack)) {
                return true;
            }
        }
        return false;
    }

    _hasCycleDFS(vertex, visited, recursionStack) {
        if (recursionStack.has(vertex)) return true;
        if (visited.has(vertex)) return false;

        visited.add(vertex);
        recursionStack.add(vertex);

        const neighbors = this.getNeighbors(vertex);
        for (let neighbor of neighbors) {
            if (this._hasCycleDFS(neighbor, visited, recursionStack)) {
                return true;
            }
        }

        recursionStack.delete(vertex);
        return false;
    }

    topologicalSort() {
        if (this.hasCycle()) {
            throw new Error('Graph has cycles, topological sort not possible');
        }

        const visited = new Set();
        const stack = [];
        const vertices = this.getVertices();

        for (let vertex of vertices) {
            if (!visited.has(vertex)) {
                this._topologicalSortDFS(vertex, visited, stack);
            }
        }

        return stack.reverse();
    }

    _topologicalSortDFS(vertex, visited, stack) {
        visited.add(vertex);
        const neighbors = this.getNeighbors(vertex);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this._topologicalSortDFS(neighbor, visited, stack);
            }
        }

        stack.push(vertex);
    }
}


const dag = new AdvancedGraph(true); // directed graph
dag.addEdge("A", "C");
dag.addEdge("B", "C");
dag.addEdge("B", "D");
dag.addEdge("C", "E");
dag.addEdge("D", "F");
dag.addEdge("E", "F");

console.log("Has cycle:", dag.hasCycle());
console.log("Topological Sort:", dag.topologicalSort());

const cyclicGraph = new AdvancedGraph(true);
cyclicGraph.addEdge("A", "B");
cyclicGraph.addEdge("B", "C");
cyclicGraph.addEdge("C", "A");

console.log("Cyclic graph has cycle:", cyclicGraph.hasCycle());
