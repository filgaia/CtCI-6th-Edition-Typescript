import { expect } from 'chai';
import { getDuplicates } from './ch10-q08';

describe('ch10-q08: find duplicates in int array', () => {
  const array = [1, 2, 3, 4, 1, 6, 3];

  it('Find duplicates in array', () => {
    const result = getDuplicates(array);
    expect(result).to.be.eql([1, 3]);
  });
});
