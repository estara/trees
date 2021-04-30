/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    let queue = [];
    queue.push(this.root);
    
    while (queue.length) {
      let current = queue.shift();
      if (current) {
        total += current.val;
        for (let child of current.children) {
          queue.push(child);
        }
      }
      
    };
    return total;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let total = 0;
    let queue = [];
    queue.push(this.root);
    
    while (queue.length) {
      let current = queue.shift();
      if (current) {
        if (current.val % 2 === 0) {
        total += 1;
        }
        for (let child of current.children) {
          queue.push(child);
        }
      }
      
    };
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let total = 0;
    let queue = [];
    queue.push(this.root);
    
    while (queue.length) {
      let current = queue.shift();
      if (current) {
        if (current.val > lowerBound) {
        total += 1;
        }
        for (let child of current.children) {
          queue.push(child);
        }
      }
      
    };
    return total;
  }
}

module.exports = { Tree, TreeNode };
