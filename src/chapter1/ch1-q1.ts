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
export function hasUniqueCharactersSet(str: string): boolean {
  const chars = new Set();

  if (str.length > 128) {
    return false;
  }

  for (const ch of str) {
    if (chars.has(ch)) {
      return false;
    }
    chars.add(ch);
  }

  return true;
}

/**
 * We can reduce our space usage by a factor of eight by using a bit vector.
 * We will assume, in the below code, that the string only uses the lowercase
 * letters a through z. This will allow us to use just a single int.
 *
 * Time: 0(n^2)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersBit(str: string): boolean {
  let checker = 0;
  let val;
  for (let i = 0; i < str.length; i++) {
    val = str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
    if ((checker & (1 << val)) > 0) {
      return false;
    }
    checker |= (1 << val);
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
export function hasUniqueCharactersSort(str: string): boolean {
  // sort string using quicksort
  const sortStrArr = str.split('').sort();

  for (let i = 1; i < sortStrArr.length; ++i) {
    if (sortStrArr[i] === sortStrArr[i - 1]) {
      return false;
    }
  }
  return true;
}
