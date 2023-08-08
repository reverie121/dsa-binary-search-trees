class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;
    if (current === null) this.root = new Node(val);
    else {
      while (current != null) {
        if (val < current.val) {
          if (current.left != null) current = current.left;
          else {
            current.left = new Node(val);
            return this;
          }
        } else {
          if (current.right != null) current = current.right;
          else {
            current.right = new Node(val);
            return this;
          }
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (current === null) {
      this.root = new Node(val)
      return this;
    } else {
      if (current.val > val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          return this.insertRecursively(val, current.left);
        }
      } else {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          return this.insertRecursively(val, current.right);
        }
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) return undefined;
    else if (this.root.val == val) return this.root;
    else {
      let current = this.root;
      while (current != null) {
        if (current.val > val) {
          if (current.left === null) {
            return undefined
          } else if (current.left.val == val) return current.left;
          else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            return undefined
          } else if (current.right.val == val) return current.right; 
          else {
            current = current.right;
          }          
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current === null) return undefined;
    else if (current.val == val) return current;
    else {
      if (current.val > val) {
        if (current.left === null) return undefined;
        else {
          return this.findRecursively(val, current.left);
        }
      } else {
        if (current.right === null) return undefined;
        else {
          return this.findRecursively(val, current.right);
        }
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let nodeValues = []
    function traverse(node) {
      nodeValues.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return nodeValues;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let nodeValues = []
    function traverse(node) {
      if (node.left) traverse(node.left);
      nodeValues.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return nodeValues;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let nodeValues = []
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      nodeValues.push(node.val);
    }
    traverse(this.root);
    return nodeValues;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let nodeValues = []
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      nodeValues.push(current.val)
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return nodeValues;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
