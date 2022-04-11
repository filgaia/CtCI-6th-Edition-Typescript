import { expect } from 'chai';
import * as funcs from './ch7-q01';

for (const key in funcs) {
  const func = funcs[key];

  describe(`ch7-q01: ${key}`, () => {
    it('game has been played', () => {
      expect(func()).to.be.true;
    });
  });
}
