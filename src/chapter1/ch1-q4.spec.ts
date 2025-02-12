import { expect } from 'chai';
import * as funcs from './ch1-q4';

for (const key in funcs) {
  const func = funcs[key];

  describe(`ch1-q4: ${key}`, () => {
    it('returns false with null/undefined as input', () => {
      expect(func(undefined)).to.be.false;
      expect(func(null)).to.be.false;
    });

    it('returns true for an empty array', () => {
      expect(func([])).to.be.true;
    });

    [
      ' ',
      '   ',
      'Tact Coa',
      'aabb',
      'ab a b',
      ' a b a b ',
      'sasadfgsadfghjk;hjk;sadfghjk;dfghjk;',
      'sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;',
    ].forEach((arg) => {
      if (key === 'isPalindromePermutationsBit') {
        if (/^[a-zA-Z\s]+$/.test(arg)) {
          it(`returns true for palindromic string which only contains English alphabet and space: '${arg}'`, () => {
            expect(func(arg.split(''))).to.be.true;
          });
        }
      } else {
        it(`returns true for palindromic string: '${arg}'`, () => {
          expect(func(arg.split(''))).to.be.true;
        });
      }
    });

    [
      'abcadef',
      '1234567890',
      'a b',
      'sg! sG$',
    ].forEach((arg) => {
      if (key === 'isPalindromePermutationsBit') {
        if (/^[a-zA-Z\s]+$/.test(arg)) {
          it(`returns false for palindromic string which only contains English alphabet and space: '${arg}'`, () => {
            expect(func(arg.split(''))).to.be.false;
          });
        }
      } else {
        it(`returns false for non-palindromic string: '${arg}'`, () => {
          expect(func(arg.split(''))).to.be.false;
        });
      }
    });
  });
}
