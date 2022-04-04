import { expect } from 'chai';
import * as funcs from './ch1-q3';

for (const key in funcs) {
  const func = funcs[key];

  describe(`ch1-q3: ${key}`, () => {
    it('works with null/undefined as input', () => {
      expect(func(undefined)).to.be.undefined;
      expect(func(null)).to.be.null;
    });

    it('works with an empty array as input', () => {
      expect(func([])).to.eql([]);
    });

    [
      'nospaces',
      ' ',
      '   ',
      ' firstSpace',
      'lastSpace ',
      '  surroundedBySpaces  ',
      'middle  spaces',
      ' l o t s   o f   s p a c e ',
      'http://www.google.com/',
      'http://www.google.com/search?q=something really really funny',
    ].forEach((arg) => {
      it(`returns true for unique string: '${arg}'`, () => {
        const expected = arg.replace(/ /g, '%20').split('');
        expect(func(arg.split(''))).to.eql(expected);
      });
    });
  });
}
