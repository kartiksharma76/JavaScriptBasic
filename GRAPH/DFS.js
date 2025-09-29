class GraphAlgorithms {
    static _getVertexFromNeighbor(neighbor) {
        if (typeof neighbor === 'object' && neighbor !== null && 'node' in neighbor) {
            return neighbor.node;
        }
        return neighbor;
    }

    static DFS(graph, startVertex) {
        const visited = new Set();
        const result = [];
        const dfs = (vertex) => {
            if (vertex == null || visited.has(vertex)) return;
            visited.add(vertex);
            result.push(vertex);
            const neighbors = graph.getNeighbors(vertex);
            for (const neighbor of neighbors) {
                const nextVertex = GraphAlgorithms._getVertexFromNeighbor(neighbor);
                dfs(nextVertex);
            }
        };
        dfs(startVertex);
        return result;
    }

    static DFSIterative(graph, startVertex) {
        if (!graph.getNeighbors(startVertex)) return [];
        const stack = [startVertex];
        const visited = new Set([startVertex]);
        const result = [];
        while (stack.length > 0) {
            const current = stack.pop();
            result.push(current);
            const neighbors = graph.getNeighbors(current);
            for (const neighbor of neighbors) {
                const nextVertex = GraphAlgorithms._getVertexFromNeighbor(neighbor);
                if (!visited.has(nextVertex)) {
                    visited.add(nextVertex);
                    stack.push(nextVertex);
                }
            }
        }
        return result;
    }

    static BFS(graph, startVertex) {
        if (!graph.getNeighbors(startVertex)) return [];
        const queue = [startVertex];
        const visited = new Set([startVertex]);
        const result = [];
        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current);
            const neighbors = graph.getNeighbors(current);
            for (const neighbor of neighbors) {
                const nextVertex = GraphAlgorithms._getVertexFromNeighbor(neighbor);
                if (!visited.has(nextVertex)) {
                    visited.add(nextVertex);
                    queue.push(nextVertex);
                }
            }
        }
        return result;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    addEdge(v1, v2, weight) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList.get(v1).push({ node: v2, weight });
        this.adjacencyList.get(v2).push({ node: v1, weight });
    }
    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex) || [];
    }
}

const graph = new WeightedGraph();
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 8);
graph.addEdge('C', 'E', 10);
graph.addEdge('D', 'E', 2);

console.log("DFS (Recursive):", GraphAlgorithms.DFS(graph, 'A'));
console.log("DFS (Iterative):", GraphAlgorithms.DFSIterative(graph, 'A'));
console.log("BFS:", GraphAlgorithms.BFS(graph, 'A'));
