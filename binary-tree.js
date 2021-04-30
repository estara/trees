/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) {return 0}

    let traverse = node => {
      if (node.left === null && node.right === null) {return 1}
      if (node.left === null) {
        return traverse(node.right)+1;
      }
      if (node.right === null) {
        return traverse(node.left)+1;
      }
      return (Math.min(traverse(node.left), traverse(node.right))+1)
    };
    
    return traverse(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) {return 0}
    let current = this.root;
    let lLength = 1;
    let rLength = 1;
    let traverse = node => {
      
      if (node.left) {
        if (node === this.root) {
          lLength = 1;
        }
        lLength += 1;
        traverse(node.left);
      }
      if (node.right) {
        if (node === this.root) {
          rLength = 1;
        }
        rLength += 1
        traverse(node.right);
      }
    };

    traverse(current);
    if (rLength < lLength) {return lLength}
    return rLength
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (this.root === null) {return 0}
    let result = 0;
    
    let traverse = node => {
      if (node === null) {return 0}
      let left = traverse(node.left);
      let right = traverse(node.right);
      result = Math.max(result, node.val + left + right)
      return Math.max(0, left + node.val, right + node.val);
      }
    traverse(this.root);
    
    return result
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let visited = null;
    let current = this.root;

    let traverse = node => {
      if (node !== null) {
        if (node.val > lowerBound && (node.val < visited || visited === null)) {
          visited = node.val;
        }
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      };
    }

    traverse(current);
    
    return visited;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
