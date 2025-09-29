class ShortestPath {
    static dijkstra(weightedGraph, startVertex) {
        const distances = {};
        const previous = {};
        const priorityQueue = new PriorityQueue();
        const vertices = weightedGraph.getVertices();

        vertices.forEach(vertex => {
            if (vertex === startVertex) {
                distances[vertex] = 0;
                priorityQueue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                priorityQueue.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        });

        while (!priorityQueue.isEmpty()) {
            const { value: currentVertex } = priorityQueue.dequeue();

            const neighbors = weightedGraph.getNeighbors(currentVertex);
            for (let neighbor of neighbors) {
                const distance = distances[currentVertex] + neighbor.weight;

                if (distance < distances[neighbor.node]) {
                    distances[neighbor.node] = distance;
                    previous[neighbor.node] = currentVertex;
                    priorityQueue.enqueue(neighbor.node, distance);
                }
            }
        }

        return { distances, previous };
    }

    static getPath(previous, endVertex) {
        const path = [];
        let current = endVertex;
        while (current !== null) {
            path.unshift(current);
            current = previous[current];
        }
        return path;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
    isEmpty() {
        return this.values.length === 0;
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
    getVertices() {
        return Array.from(this.adjacencyList.keys());
    }
}

// Test graph
const graph = new WeightedGraph();
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 8);
graph.addEdge('C', 'E', 10);
graph.addEdge('D', 'E', 2);
graph.addEdge('D', 'Z', 6);
graph.addEdge('E', 'Z', 3);

// Run Dijkstra
const { distances, previous } = ShortestPath.dijkstra(graph, 'A');
console.log("Distances:", distances);
console.log("Previous:", previous);
console.log("Path A -> Z:", ShortestPath.getPath(previous, 'Z'));
