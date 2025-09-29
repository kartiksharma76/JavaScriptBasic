class Graph{
    constructor (){
        this.adjacencyList = new Map();

    }
    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex,[]);

        }
    }
    addEdge(vertex1,vertex2){
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);

    }
    // add directed edge

    addDirectedEdge(from ,to){
        this.addVertex(from);
        this.addVertex(to);
        this.adjacencyList.get(from).push(to);

    }
    // remove edge

    removeEdge(vertex1, vertex2){
        this.adjacencyList.set(
            vertex1,
            this.adjacencyList.get(vertex1).filter(v=> v !== vertex2)

        );
        this.adjacencyList.set(
            vertex2,
            this.adjacencyList.get(vertex2).filter(v => v !== vertex1)
        );
    }
    // removeVertex
    removeVertex(vertex){
        if(!this.adjacencyList.has(vertex))return;

        for(let neighbor of this.adjacencyList.get(vertex)){
            this.removeEdge(vertex , neighbor);
        }
        this.adjacencyList.delete(vertex);
    }
    // get neighbour
    getNeighbors(vertex){
        return this.adjacencyList.get(vertex)  || [];
    }
    hasEdge(vertex1, vertex2){
        return this.adjacencyList.get(vertex1)?.includes(vertex2) || false;
    }

    getVertices(){
        return Array.from(this.adjacencyList.keys());

    }
    //print
    print() {
        for(let [vertex, neighbor] of this.adjacencyList){
            console.log(`${vertex} -> ${neighbor.join(',')}`);
        }
    }
}
const graph = new Graph();

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');


graph.addDirectedEdge('C', 'D');

graph.addVertex('E');

graph.print();