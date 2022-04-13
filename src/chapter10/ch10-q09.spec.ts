import { expect } from 'chai';
import * as funcs from './ch10-q09';

for (const key in funcs) {
  const func = funcs[key];

  describe(`ch10-q09: ${key}`, () => {
    it('should not find in empty matrix', () => {
      const input = [[]];
      expect(func(input)).to.be.false;
    });
    it('find element in matrix', () => {
      const input = [
        [15, 20, 40, 85],
        [20, 35, 80, 95],
        [30, 55, 95, 105],
        [40, 80, 100, 120],
      ];
      expect(func(input, 55)).to.be.true;
    });
  });
}
