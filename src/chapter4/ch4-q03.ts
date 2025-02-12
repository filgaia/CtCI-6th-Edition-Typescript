import { LinkedList, TreeNode, Tree } from './helpers';

/**
 * Travels through tree and adds values into a list of linked lists. Each level
 * of tree is represented in a linked list.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(N)
 */
export function listTreeByDepthOrder(tree: Tree): LinkedList[] {
  const lists: LinkedList[] = [];
  addToList(lists, tree.root, 0);
  return lists;
}

function addToList(lists: LinkedList[], node: TreeNode | null, depth: number): void {
  if (node) {
    if (!lists[depth]) {
      lists[depth] = new LinkedList();
    }

    lists[depth].append(node.val);

    addToList(lists, node.left, depth + 1);
    addToList(lists, node.right, depth + 1);
  }
}
