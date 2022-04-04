'use strict';

/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found.
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSet(str) {
  const chars = new Set();

  for (const ch of str) {
    if (chars.has(ch)) {
      return false;
    }
    chars.add(ch);
  }

  return true;
}

/**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to eachother so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSort(str) {
  // sort string using quicksort
  const sortStrArr = str.split('').sort();

  for (let i = 1; i < sortStrArr.length; ++i) {
    if (sortStrArr[i] === sortStrArr[i - 1]) {
      return false;
    }
  }
  return true;
}
