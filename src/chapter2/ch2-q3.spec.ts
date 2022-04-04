import { expect } from 'chai';
import * as helpers from './helpers';
import * as funcs from './ch2-q3';

for (const key in funcs) {
  const func = funcs[key];

  describe(`ch2-q3: ${key}`, () => {
    it('throws an error if node is invalid', () => {
      expect(() => func(null)).to.throw('invalid node');
      expect(() => func(undefined)).to.throw('invalid node');
      expect(() => func(helpers.arrayToLinkedList([11]))).to.throw('invalid node');
    });

    it('can delete multiple in long list', () => {
      const list: any = helpers.arrayToLinkedList([8, 6, 4, 2, 1]);
      func(list);
      func(list);
      func(list);
      func(list);
      expect(list.val).to.equal(1);
      expect(list.next).to.be.null;
    });

    [
      {
        list: [5, 8],
        node: 0,
        expected: [8],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 8,
        expected: [5, 8, 3, 2, 7, 1, 4, 9, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 4,
        expected: [5, 8, 3, 2, 1, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 1,
        expected: [5, 3, 2, 7, 1, 4, 9, 15, 30],
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 2,
        expected: [5, 8, 2, 7, 1, 4, 9, 15, 30],
      },
    ].forEach((context) => {
      it(`removing node ${context.node} from list ${context.list}`, () => {
        const list = helpers.arrayToLinkedList(context.list);
        let node = list;
        for (let i = 0; i < context.node; ++i) {
          node = node?.next;
        }
        func(node);
        expect(helpers.linkedListToArray(list)).to.eql(context.expected);
      });
    });
  });
}
