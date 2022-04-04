import { expect } from 'chai';
import { merge } from './ch10-q01';

describe('ch10-q01', () => {
  const A = [1, 3, 5, 6, 7, undefined, undefined];
  const B = [2, 4];
  const result = merge(A, B);
  it('merges arrays into one ordered', () => {
    expect(result).to.be.eql([1, 2, 3, 4, 5, 6, 7]);
  });
});
