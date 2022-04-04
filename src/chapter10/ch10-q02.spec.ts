import { expect } from 'chai';
import { groupAnagrams } from './ch10-q02';

describe('ch10-q02', () => {
  const A = ['asd', 'as', 'sAd', 'sA', 'Das'];
  const result = groupAnagrams(A);
  it('Sorting an array of strings so that all the anagrams are next to each other.', () => {
    expect(result).to.be.eql(['asd', 'sAd', 'Das', 'as', 'sA']);
  });
});
