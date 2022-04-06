import { expect } from 'chai';
import * as funcs from './ch1-q1';

for (const key in funcs) {
  const func = funcs[key];

  describe(`ch1-q1: ${key}`, () => {
    ['abcdefghi', 'jklpoiuqwerzxcvmnsadf', '1234567890', 'abcdefg1234567890(*)'].forEach((arg) => {
      it(`returns true for unique string: '${arg}'`, () => {
        expect(func(arg.split(''))).to.be.true;
      });
    });

    [
      'abcadef',
      'aaaaaaaaaa',
      'abcdefghijklmnopqrstuvwxyza',
      '1234567890asdklf1',
      '!@#$%^&*()(*#($&#(*$&#*($&#()))))',
    ].forEach((arg) => {
      it(`returns false for string with dupes: '${arg}'`, () => {
        expect(func(arg.split(''))).to.be.false;
      });
    });
  });
}
