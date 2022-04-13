import { expect } from 'chai';
import * as funcs from './ch10-q03';

for (const key in funcs) {
  const func = funcs[key];

  describe(`ch10-q03: ${key}`, () => {
    it('no element to find', () => {
      const input = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
      expect(func(input)).to.be.equal(-1);
    });

    it('find element in array', () => {
      const input = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
      expect(func(input, 5)).to.be.equal(8);
    });
  });
}
