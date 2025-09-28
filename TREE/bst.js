// -------------------- Node Class --------------------
class Node {
  constructor(value) {
    this.value = value; // Node value
    this.left = null;   // Left child
    this.right = null;  // Right child
  }
}

// -------------------- BST Class --------------------
class BST {
  constructor() {
    this.root = null;
  }

  // -------------------- INSERT --------------------
  /**
   * Algorithm:
   * 1. If root is null, create new node as root.
   * 2. Else, compare value with current node:
   *    - value < node.value → go left
   *    - value > node.value → go right
   * 3. Repeat recursively until a null position is found.
   * 4. Insert new node at null position.
   * Time Complexity: O(h) where h = height of tree
   */
  insert(value) {
    this.root = this._insertHelper(this.root, value);
  }

  _insertHelper(node, value) {
    if (!node) return new Node(value);
    if (value < node.value) node.left = this._insertHelper(node.left, value);
    else if (value > node.value) node.right = this._insertHelper(node.right, value);
    return node;
  }

  // -------------------- SEARCH --------------------
  /**
   * Algorithm:
   * 1. Start from root.
   * 2. If node is null → value not found.
   * 3. If node.value == value → value found.
   * 4. If value < node.value → search left subtree.
   * 5. Else → search right subtree.
   * Time Complexity: O(h)
   */
  search(value) {
    return this._searchHelper(this.root, value) !== null;
  }

  _searchHelper(node, value) {
    if (!node || node.value === value) return node;
    if (value < node.value) return this._searchHelper(node.left, value);
    return this._searchHelper(node.right, value);
  }

  // -------------------- DELETE --------------------
  /**
   * Algorithm:
   * 1. Find node to delete.
   * 2. Case 1: Node has no child → remove node.
   * 3. Case 2: Node has one child → replace node with its child.
   * 4. Case 3: Node has two children → find inorder successor (smallest in right subtree), replace node.value with successor.value, delete successor node.
   * Time Complexity: O(h)
   */
  delete(value) {
    this.root = this._deleteHelper(this.root, value);
  }

  _deleteHelper(node, value) {
    if (!node) return null;

    if (value < node.value) node.left = this._deleteHelper(node.left, value);
    else if (value > node.value) node.right = this._deleteHelper(node.right, value);
    else {
      // Node found
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let minNode = node.right;
      while (minNode.left) minNode = minNode.left;
      node.value = minNode.value;
      node.right = this._deleteHelper(node.right, minNode.value);
    }
    return node;
  }

  // -------------------- INORDER TRAVERSAL --------------------
  /**
   * Algorithm:
   * 1. Traverse left subtree.
   * 2. Visit node.
   * 3. Traverse right subtree.
   * Time Complexity: O(n)
   */
  inorder() { this._inorderHelper(this.root); }
  _inorderHelper(node) {
    if (!node) return;
    this._inorderHelper(node.left);
    console.log(node.value);
    this._inorderHelper(node.right);
  }

  // -------------------- PREORDER TRAVERSAL --------------------
  /**
   * Algorithm:
   * 1. Visit node.
   * 2. Traverse left subtree.
   * 3. Traverse right subtree.
   * Time Complexity: O(n)
   */
  preorder() { this._preorderHelper(this.root); }
  _preorderHelper(node) {
    if (!node) return;
    console.log(node.value);
    this._preorderHelper(node.left);
    this._preorderHelper(node.right);
  }

  // -------------------- POSTORDER TRAVERSAL --------------------
  /**
   * Algorithm:
   * 1. Traverse left subtree.
   * 2. Traverse right subtree.
   * 3. Visit node.
   * Time Complexity: O(n)
   */
  postorder() { this._postorderHelper(this.root); }
  _postorderHelper(node) {
    if (!node) return;
    this._postorderHelper(node.left);
    this._postorderHelper(node.right);
    console.log(node.value);
  }
}

// -------------------- EXAMPLE USAGE --------------------
const bst = new BST();
bst.insert('F');
bst.insert('B');
bst.insert('G');
bst.insert('A');
bst.insert('D');
bst.insert('I');
bst.insert('C');
bst.insert('E');
bst.insert('H');

console.log("Inorder Traversal:");
bst.inorder();  

console.log("Preorder Traversal:");
bst.preorder(); 

console.log("Postorder Traversal:");
bst.postorder(); 

console.log("Search 'E':", bst.search('E')); 
console.log("Search 'Z':", bst.search('Z')); 
