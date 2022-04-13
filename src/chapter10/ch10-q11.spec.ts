import { expect } from 'chai';
import { isValleyOrPeek, sort } from './ch10-q11';

describe('ch10-q11: sort array to peeks and valleys. ', () => {
  const array = [5, 3, 1, 2, 3];

  it('Should return correctly sorted array with only peaks and valleys.', () => {
    const result = sort(array);
    const isCorrectSort = result.every((_, index: number, arr: number[]) =>
      isValleyOrPeek(arr, index),
    );
    expect(isCorrectSort).to.be.eq(true, JSON.stringify(result));
  });
});
