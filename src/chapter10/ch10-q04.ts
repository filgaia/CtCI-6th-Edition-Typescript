/* 10.4 Sorted Search, No Size: You are given an array-like data structure Listy
which lacks a size method.It does, however, have an elementAt(i) method that
returns the element at index i in 0(1) time. If i is beyond the bounds of the
data structure, it returns -1. (For this reason, the data structure only supports
positive integers.) Given a Listy which contains sorted, positive integers, find the
index at which an element x occurs. If x occurs multiple times, you may return any index. */

export class Listy {
  _array: number[];

  constructor(array: number[]) {
    this._array = array;
  }

  elementAt(index: number): number {
    if (index >= this._array.length) {
      return -1;
    }

    return this._array[index];
  }
}

export function findIndex(listy: Listy, x: number): number {
  // looking for borders of binary search
  let left = 0;
  let right = 1;
  while (listy.elementAt(right) !== -1 && listy.elementAt(right) < x) {
    left = right;
    right = 3 * left + 1;
  }

  // doing search
  while (right !== left) {
    if (x === listy.elementAt(right)) {
      return right;
    }
    if (x === listy.elementAt(left)) {
      return left;
    }
    if (listy.elementAt(left) === -1 && listy.elementAt(right) === -1) {
      return -1;
    }

    const middle = Math.floor(left + (right - left) / 2);
    if (x <= listy.elementAt(middle) || middle === left || listy.elementAt(middle) === -1) {
      right = middle;
    } else {
      left = middle;
    }
  }

  return -1;
}
