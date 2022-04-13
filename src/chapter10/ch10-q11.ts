/* 10.11 Peaks and Valleys: In an array of integers, a "peak" is an element which
is greater than or equal to the adjacent integers and a "valley" is an element which
is less than or equal to the adjacent integers. For example, in the array
{5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks and {S, 2} are valleys. Given an array of
integers, sort the array into an alternating sequence of peaks and valleys.
EXAMPLE
Input:  {5, 3, 1, 2, 3}
Output: {5, 1, 3, 2, 3}.
time: O(n log n)
*/

export function sort(intArray: number[]): number[] {
  intArray.sort();

  let index = 0;
  while (index < Math.floor(intArray.length / 2)) {
    swap(intArray, index, intArray.length - index - 1);
    index += 2;
  }

  return intArray;
}

export function isValleyOrPeek(array: number[], index: number): boolean {
  if (index === 0 || index === array.length - 1) {
    return true;
  }
  if (
    (array[index - 1] <= array[index] && array[index + 1] <= array[index]) ||
    (array[index - 1] >= array[index] && array[index + 1] >= array[index])
  ) {
    return true;
  }
  return false;
}

function swap(array: number[], a: number, b: number): void {
  const buffer = array[a];
  array[a] = array[b];
  array[b] = buffer;
}
