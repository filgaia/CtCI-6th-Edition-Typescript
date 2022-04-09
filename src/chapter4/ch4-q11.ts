import { Tree, TreeNode } from './helpers';

/**
 * RandomNode routine first gets a random number between 1 and the number of
 * elements in the tree. Every node in the tree keeps track of the size of the
 * subtree that is it a part of (number of nodes in left and right subtrees
 * as well as itself). Using these counts we can go through the tree and find
 * the node whose index would match that random number if the trees values
 * where considered in order.
 *
 * If the random number is:
 *   1. smaller than the nodes left subtree size then go left.
 *   2. equal to the left subtree size + 1 then return current node.
 *   3. otherwise go right and subtract the left subtree size from the random
 *   number as we have already skipped over that many values.
 *
 * N = |tree|
 * Time: insert O(lg N), delete O(lg N), find O(lg N), randomNode O(lg N) - this
 * assumes a balanced tree, otherwise all of these would be O(N) in the worst case
 * Additional space: insert O(N) - to hold values and keep track of subtree sizes
 * delete O(lg N), find O(1), randomNode O(1)
 */
export class RandomBinarySearchTree extends Tree {
  root: TreeNode | null;

  constructor() {
    super();
    this.root = null;
  }

  insert(value: number): void {
    let node: Tree | TreeNode = this;
    let branch = 'root';
    while (node[branch]) {
      node = node[branch] as TreeNode;
      ++node.size;
      branch = value < node.val ? 'left' : 'right';
    }
    node[branch] = new TreeNode(value, node as TreeNode);
  }

  delete(value: number): boolean {
    return this._deleteRecursive(this.root, 'root', value);
  }

  _deleteRecursive(node: TreeNode | null, parentBranch: string, value: number): boolean {
    if (node) {
      if (node.val === value) {
        if (!node.left && !node.right) {
          if (node?.parent) {
            node.parent[parentBranch] = null;
          }
          return true;
        }
        if (node.left && !node.right) {
          if (node?.parent) {
            node.parent[parentBranch] = node.left;
          }
          return true;
        }
        if (!node.left && node.right) {
          if (node?.parent) {
            node.parent[parentBranch] = node.right;
          }
          return true;
        }

        let minNode = node.right;
        while (minNode?.left) {
          minNode = minNode.left;
        }
        node.val = minNode?.val || 0;
        --node.size;
        return this._deleteRecursive(node.right, 'right', minNode?.val || 0);
      }

      const branch = value < node.val ? 'left' : 'right';
      if (this._deleteRecursive(node[branch], branch, value)) {
        --node.size;
        return true;
      }
    }

    return false;
  }

  find(value: number): TreeNode | undefined {
    let node = this.root;
    let branch;
    while (node) {
      if (node.val === value) {
        return node;
      }
      branch = value < node.val ? 'left' : 'right';
      node = node[branch] as TreeNode;
    }
    return undefined;
  }

  randomNode(): TreeNode | undefined {
    if (!this.root) {
      return undefined;
    }

    let idx = Math.ceil(Math.random() * this.root.size);
    let node = this.root;
    while (idx > 0) {
      if (node.left) {
        if (idx === node.left.size + 1) {
          return node;
        }
        if (idx <= node.left.size) {
          node = node.left;
        } else if (node.right) {
          idx -= node.left.size + 1;
          node = node.right;
        }
      } else {
        if (idx <= 1) {
          return node;
        }
        if (node.right) {
          --idx;
          node = node.right;
        }
      }
    }

    throw new Error('Should never reach this code, this is just an assertion that we dont');
  }
}
