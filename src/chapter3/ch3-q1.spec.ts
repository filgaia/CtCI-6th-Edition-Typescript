import { expect } from 'chai';
import * as classes from './ch3-q1';

for (const key in classes) {
  const Stack = classes[key];
  let stack: any;

  describe(`ch3-q1: ${key}`, () => {
    beforeEach(() => {
      stack = new Stack();
    });

    it('can push and pop values from middle stack correctly', () => {
      const myStack = [];
      for (let i = 1; i < 100; i += 4) {
        const val = Math.trunc(Math.random() * 999999);
        stack.push(2, val);
        myStack.push(val);
      }

      myStack.reverse().forEach((v: number) => expect(stack.pop(2)).to.equal(v));
    });

    it('can push, peek and pop values from all 3 stacks correctly', () => {
      const stacks: number[][] = [[], [], []];
      for (let j = 9; j > 0; --j) {
        for (let i = 1; i <= 3; ++i) {
          const val = i * 10 + j;
          stack.push(i, val);
          stacks[i - 1].push(val);
          expect(stack.peek(i)).to.equal(val);
        }
      }

      for (let i = 1; i <= 3; ++i) {
        stacks[i - 1].reverse().forEach((v) => expect(stack.pop(i)).to.equal(v));
        expect(stack.isEmpty(i)).to.be.true;
      }
    });
  });
}
