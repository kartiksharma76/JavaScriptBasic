// -------------------- Node Class --------------------
class Node {
  constructor(key) {
    this.key = key;       // Node key
    this.height = 1;      // Height of the node
    this.left = null;     // Left child
    this.right = null;    // Right child
  }
}

// -------------------- AVL Tree Class --------------------
class AVLTree {
  constructor() {
    this.root = null;
  }

  // -------------------- GET HEIGHT --------------------
  getHeight(node) {
    return node ? node.height : 0;
  }

  // -------------------- GET BALANCE FACTOR --------------------
  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // -------------------- RIGHT ROTATION --------------------
  rightRotate(y) {
    console.log("Right Rotation");
    let x = y.left;
    let T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  // -------------------- LEFT ROTATION --------------------
  leftRotate(x) {
    console.log("Left Rotation");
    let y = x.right;
    let T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  // -------------------- INSERT --------------------
  insert(key) {
    this.root = this._insertHelper(this.root, key);
  }

  _insertHelper(node, key) {
    if (!node) return new Node(key);

    if (key < node.key) node.left = this._insertHelper(node.left, key);
    else if (key > node.key) node.right = this._insertHelper(node.right, key);
    else return node; // duplicates not allowed

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    let balance = this.getBalanceFactor(node);

    // LL Case
    if (balance > 1 && key < node.left.key) return this.rightRotate(node);

    // RR Case
    if (balance < -1 && key > node.right.key) return this.leftRotate(node);

    // LR Case
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // RL Case
    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  // -------------------- PREORDER TRAVERSAL --------------------
  /**
   * Algorithm: Root → Left → Right
   * 1. Visit node
   * 2. Traverse left subtree
   * 3. Traverse right subtree
   */
  preOrder(node = this.root) {
    if (!node) return;
    console.log(node.key + " ");
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  // -------------------- INORDER TRAVERSAL --------------------
  /**
   * Algorithm: Left → Root → Right
   * 1. Traverse left subtree
   * 2. Visit node
   * 3. Traverse right subtree
   */
  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.key + " ");
    this.inOrder(node.right);
  }

  // -------------------- POSTORDER TRAVERSAL --------------------
  /**
   * Algorithm: Left → Right → Root
   * 1. Traverse left subtree
   * 2. Traverse right subtree
   * 3. Visit node
   */
  postOrder(node = this.root) {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.key + " ");
  }
}

// -------------------- USAGE EXAMPLE --------------------
const avl = new AVLTree();

avl.insert(10);
avl.insert(20);
avl.insert(30); // triggers left rotation
avl.insert(40);
avl.insert(50); // triggers left rotation
avl.insert(25); // triggers RL rotation

console.log("Preorder Traversal of AVL Tree:");
avl.preOrder();

console.log("Inorder Traversal of AVL Tree:");
avl.inOrder();

console.log("Postorder Traversal of AVL Tree:");
avl.postOrder();
