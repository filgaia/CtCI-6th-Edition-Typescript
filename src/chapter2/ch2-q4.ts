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
export function partition(list: any, val: any) {
  let node = list;
  let smallerHead;
  let smallerTail: any;
  let largerHead;
  let largerTail: any;

  smallerHead = smallerTail = largerHead = largerTail = null;
  while (node) {
    const { next } = node;
    node.next = null;
    if (node.val >= val) {
      if (!largerTail) {
        largerHead = largerTail = node;
      } else {
        largerTail = largerTail.next = node;
      }
    } else if (node.val < val) {
      if (!smallerHead) {
        smallerHead = smallerTail = node;
      } else {
        smallerTail = smallerTail.next = node;
      }
    }
    node = next;
  }

  if (smallerTail) {
    smallerTail.next = largerHead;
  }
  return smallerHead || largerHead;
}
