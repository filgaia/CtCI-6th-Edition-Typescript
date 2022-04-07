import { MinStackItem } from './ch3-models';

/**
 * MinStack maintains a current stack minimum by putting an object on the stack
 * that holds the value and the minimum at that time rather than just the value.
 * When items are popped the value is returned without the wrapping object. When
 * minimum is called we return the min property of the wrapping object.
 *
 * Time: push O(1), pop O(1), peek O(1), min O(1)
 * Additional space: push O(N), pop O(1), peek O(1), min O(1)
 * Additional space required in push to create wrapping object to hold min at
 * that point.
 */
export class MinStack {
  private _stack: MinStackItem[];

  constructor() {
    this._stack = [];
  }

  push(value: number): void {
    const min: any = this.min();
    this._stack.push({
      value,
      min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value),
    });
  }

  pop(): number | undefined {
    if (!this.isEmpty()) {
      const item = this._stack.pop();
      return item?.value;
    }
  }

  peek(): number | undefined {
    if (!this.isEmpty()) {
      const item = this._stack[this._stack.length - 1];
      return item.value;
    }
  }

  min(): number | undefined {
    if (!this.isEmpty()) {
      const item = this._stack[this._stack.length - 1];
      return item.min;
    }
  }

  isEmpty(): boolean {
    return this._stack.length === 0;
  }
}
