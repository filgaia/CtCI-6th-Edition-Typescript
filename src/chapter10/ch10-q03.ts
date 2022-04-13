/**
 * Search in Rotated Array:
 * Given a sorted array of n integers that has been rotated an unknown number of times,
 * write code to find an element in the array.
 * You may assume that the array was originally sorted in increasing order
 * order: O( n)
 * @param array rotated array
 */
export function findInRotatedArray(array: number[], x?: number): number {
  if (!x) {
    return -1; // No element to find
  }

  return search(array, 0, array.length - 1, x);
}

function search(a: number[], left: number, right: number, x: number): number {
  const mid = Math.floor((left + right) / 2);
  if (x === a[mid]) {
    // Found element
    return mid;
  }
  if (right < left) {
    return -1;
  }
  /*
   * Either the left or right half must be normally ordered. Find out which side
   * is normally ordered, and then use the normally ordered half to figure out
   * which side to search to find x.
   */
  if (a[left] < a[mid]) {
    // Left is normally ordered.
    if (x >= a[left] && x < a[mid]) {
      return search(a, left, mid - 1, x); // Search left
    }

    return search(a, mid + 1, right, x); // Search right
  }

  if (a[mid] < a[left]) {
    // Right is normally ordered.
    if (x > a[mid] && x <= a[right]) {
      return search(a, mid + 1, right, x); // Search right
    }

    return search(a, left, mid - 1, x); // Search left
  }

  if (a[left] === a[mid]) {
    // Left or right half is all repeats
    if (a[mid] !== a[right]) {
      // If right is different, search it
      return search(a, mid + 1, right, x); // search right
    }
    // Else, we have to search both halves
    const result: number = search(a, left, mid - 1, x); // Search left

    if (result === -1) {
      return search(a, mid + 1, right, x); // Search right
    }
    return result;
  }

  return -1;
}
