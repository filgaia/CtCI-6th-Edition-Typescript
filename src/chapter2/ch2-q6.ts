import { LinkedListNode } from './ch2-models';
import { getLength, reverse } from './helpers';

/**
 * First find out the length of the list, then walk through half of the list
 * pushing the values onto a stack. Once the middle is reached if the list had
 * an odd length then skip the middle element. After that walk to the end of the
 * list and compare node values to a value popped off the stack, if no mismatches
 * then the list is a palindrome.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(N)
 */
export function isPalindromeStack(list: LinkedListNode | null): boolean {
  const length = getLength(list);

  if (length <= 1) {
    return true;
  }

  const stack = [];
  let node = list;
  for (let i = Math.floor(length / 2); i > 0; --i) {
    stack.push(node?.val);
    node = node?.next || null;
  }

  if (length % 2 === 1) {
    node = node?.next || null;
  }

  while (node) {
    if (node.val !== stack.pop()) {
      return false;
    }
    node = node.next;
  }
  // since we only put half the items on the stack it shouldn't be possible
  // for there to be anything left in the stack so it should always be empty
  // as such this check isn't really necessary and this could just be return true
  return stack.length === 0;
}

/**
 * First find out the length of the list, then walk to the middle of the list.
 * Once the middle is reached if the list had an odd length then skip the middle
 * element. Walk through the remainder of the list reversing the nodes until the
 * end is reached. Now start walking one pointer from the start of the list and
 * another from the end of the list walking towards the middle. Compare values
 * while moving towards the middle. Reverse the second half of the list back to
 * its original order while moving towards the middle.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export function isPalindromeReverse(list: LinkedListNode | null): boolean {
  const length = getLength(list);

  if (length <= 1) {
    return true;
  }

  let node = list;
  const half = Math.floor(length / 2);
  let mid;
  for (let i = half; i > 0; --i) {
    mid = node;
    node = node?.next || null;
  }

  if (length % 2 === 1) {
    mid = node;
    node = node?.next || null;
  }

  let tail = reverse(node, mid || null);
  let isPalindrome = true;
  let prev = null;
  let next: LinkedListNode | null;
  // now walk from start to middle and end to middle comparing values
  node = list;
  for (let i = half; i > 0; --i) {
    isPalindrome = isPalindrome && node?.val === tail?.val;
    next = tail?.next || null;

    if (tail) {
      tail.next = prev;
    }

    prev = tail;

    if (tail) {
      tail = next;
    }
    node = node?.next || null;
  }

  return isPalindrome;
}
