import { LinkedListNode } from './ch2-models';

/**
 * Iterate through list keeping a Set of all the values seen. If a seen value is
 * seen again in the list then skip over it.
 *
 * N = |list|
 * Time: O(N) -> Assuming Set is a HashSet structure with O(1) access times
 * Additional space: O(N)
 */
export function removeDuplicatesSet(list: LinkedListNode): LinkedListNode {
  if (!list) {
    return list;
  }

  const seen = new Set();
  let node = list;

  // add head
  seen.add(node.val);
  while (node.next) {
    if (seen.has(node.next.val)) {
      // skip next node
      node.next = node.next.next;
    } else {
      seen.add(node.next.val);
      node = node.next;
    }
  }

  return list; // return list, head will never change
}

/**
 * Iterate through list keeping a Set of all the values seen. If a seen value is
 * seen again in the list then skip over it.
 * No buffer allowed
 *
 * N = |list|
 * Time: O(N^2)
 * Additional space: O(1)
 */
export function removeDuplicatesNoBuffer(head: LinkedListNode): void {
  if (!head) {
    return head;
  }

  let current: LinkedListNode | null = head;

  while (current != null) {
    /* Remove all future nodes that have the same value */
    let runner = current;
    while (runner.next != null) {
      if (runner.next.val === current.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
}
