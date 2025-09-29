class WeightedGraph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2, weight = 1) {
        // Undirected weighted edge
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
        this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
    }

    addDirectedEdge(from, to, weight = 1) {
        // Directed weighted edge
        this.addVertex(from);
        this.addVertex(to);
        this.adjacencyList.get(from).push({ node: to, weight });
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) return;

        // Remove vertex2 from vertex1's list
        const neighbors1 = this.adjacencyList.get(vertex1);
        const filtered1 = neighbors1.filter(neighbor => neighbor.node !== vertex2);
        this.adjacencyList.set(vertex1, filtered1);

        // Remove vertex1 from vertex2's list (only for undirected graphs)
        const neighbors2 = this.adjacencyList.get(vertex2);
        const filtered2 = neighbors2.filter(neighbor => neighbor.node !== vertex1);
        this.adjacencyList.set(vertex2, filtered2);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) return;

        // Remove all edges pointing to this vertex from others
        for (const [v, neighbors] of this.adjacencyList) {
            if (v !== vertex) {
                const filtered = neighbors.filter(neighbor => neighbor.node !== vertex);
                this.adjacencyList.set(v, filtered);
            }
        }

        // Finally, delete the vertex itself
        this.adjacencyList.delete(vertex);
    }

    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex) || [];
    }

    hasEdge(vertex1, vertex2) {
        const neighbors = this.adjacencyList.get(vertex1);
        if (!neighbors) return false;
        return neighbors.some(neighbor => neighbor.node === vertex2);
    }

    getVertices() {
        return Array.from(this.adjacencyList.keys());
    }

    // Optional: Get weight of edge (assuming simple case; for multiedges, more logic needed)
    getEdgeWeight(vertex1, vertex2) {
        const neighbors = this.adjacencyList.get(vertex1);
        if (!neighbors) return null;
        const edge = neighbors.find(neighbor => neighbor.node === vertex2);
        return edge ? edge.weight : null;
    }

    print() {
        for (const [vertex, neighbors] of this.adjacencyList) {
            const neighborStr = neighbors
                .map(n => `${n.node}(${n.weight})`)
                .join(', ');
            console.log(`${vertex} -> ${neighborStr}`);
        }
    }
}
const wg = new WeightedGraph();

// Add undirected weighted edges
wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'C', 1);

// Add a directed weighted edge
wg.addDirectedEdge('C', 'D', 5);

wg.print();