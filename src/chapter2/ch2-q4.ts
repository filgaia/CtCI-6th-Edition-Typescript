import { LinkedListNode } from './ch2-models';

/**
 * Travel through list and maintain two lists as we travel through. One list
 * contains all the items less than the partition value and the other contains
 * all the items greater than or equal to it.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1) -> as new structures aren't being created, original
 * list is being manipulated.
 */
export function partitionStable(node: LinkedListNode | null, val: number): LinkedListNode | null {
  let smallerHead: LinkedListNode | null = null;
  let smallerTail: LinkedListNode | null = null;
  let largerHead: LinkedListNode | null = null;
  let largerTail: LinkedListNode | null = null;

  while (node) {
    const { next } = node;
    node.next = null;
    if (node.val < val) {
      if (!smallerHead) {
        smallerHead = node;
        smallerTail = node;
      } else if (smallerTail) {
        smallerTail.next = node;
        smallerTail = node;
      }
    } else if (node.val >= val) {
      if (!largerTail) {
        largerHead = node;
        largerTail = node;
      } else {
        largerTail.next = node;
        largerTail = node;
      }
    }
    node = next;
  }

  if (smallerTail) {
    smallerTail.next = largerHead;
  }
  console.log(smallerHead, smallerTail, largerHead, largerTail);
  return smallerHead || largerHead;
}
