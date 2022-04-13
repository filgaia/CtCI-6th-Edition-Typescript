import { Anagram } from './ch10-models';

// 10.2 Group Anagrams:
// Write a method to sort an array of strings so that all the anagrams are next to each other.
// time: O(n log(n))
export function groupAnagrams(A: string[]): string[] {
  const buckets: Anagram[] = [];
  for (let i = 0, len = A.length; i < len; i++) {
    const elementSorted = sortLetters(A[i]);
    const bucket = buckets.find((element) => elementSorted === element.sortedWord);
    if (bucket) {
      bucket.elements.push(A[i]);
    } else {
      buckets.push({ sortedWord: elementSorted, elements: [A[i]] });
    }
  }

  let result: string[] = [];
  for (let i = 0, len = buckets.length; i < len; i++) {
    result = result.concat(buckets[i].elements);
  }

  return result;
}

function sortLetters(word: string): string {
  return word.toLowerCase().split('').sort().join('');
}
