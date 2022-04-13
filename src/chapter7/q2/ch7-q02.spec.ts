import { expect } from 'chai';
import * as funcs from './ch7-q02';

for (const key in funcs) {
  const func = funcs[key];

  describe(`ch7-q02: ${key}`, () => {
    it('call have been done', () => {
      expect(func(1)).to.be.true;
    });
  });
}
