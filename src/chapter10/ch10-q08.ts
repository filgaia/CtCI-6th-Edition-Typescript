import { IVector } from './ch10-models';

/* 10.8 Find Duplicates: You have an array with all the numbers from 1to N,
where Nis at most 32,000.The array may have duplicate entries and you do not
know what N is. With only 4 kilobytes of memory available, how would you print
all duplicate elements in the array?
*/

export function getDuplicates(intArray: number[]): number[] {
  const vector: IVector = {};
  const duplicates = [];
  for (let i = 0; i < intArray.length; i++) {
    const element = intArray[i];
    if (vector[element]) {
      if (duplicates.indexOf(element) === -1) {
        duplicates.push(element);
      }
    } else {
      vector[element] = 1;
    }
  }

  return duplicates;
}
