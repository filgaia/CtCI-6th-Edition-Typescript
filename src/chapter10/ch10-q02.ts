// 10.2 Group Anagrams:
// Write a method to sort an array of strings so that all the anagrams are next to each other.

export function groupAnagrams(A: any) {
  const buckets: any[] = [];
  for (let i = 0, len = A.length; i < len; i++) {
    const elementSorted = sortLetters(A[i]);
    const bucket = buckets.find((element) => elementSorted === element.sortedWord);
    if (bucket) {
      bucket.elements.push(A[i]);
    } else {
      buckets.push({ sortedWord: elementSorted, elements: [A[i]] });
    }
  }

  let result: any[] = [];
  for (let i = 0, len = buckets.length; i < len; i++) {
    result = result.concat(buckets[i].elements);
  }

  return result;
}

function sortLetters(word: string) {
  return word.toLowerCase().split('').sort().join('');
}
