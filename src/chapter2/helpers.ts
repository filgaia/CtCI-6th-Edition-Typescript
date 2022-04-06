import { LinkedList, LinkedListNode } from './ch2-models';

export function linkedListToArray(list: LinkedListNode | null): number[] {
  const arr = [];
  let node: LinkedListNode | null = list;

  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }

  return arr;
}

export function createNode(val: number, next?: LinkedListNode | null): LinkedListNode {
  return {
    val,
    next: next || null,
  };
}

export function arrayToLinkedList(arr: number[]): LinkedListNode | null {
  if (arr.length === 0) {
    return null;
  }

  let list = null;
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list);
  }

  return list;
}

export function getLength(list: any): number {
  let length = 0;
  while (list) {
    list = list.next;
    ++length;
  }
  return length;
}

export function createLinkedList(): LinkedList {
  return {
    head: null,
    tail: null,
  };
}

export function pushSingle(list: any, value: any): void {
  const node = createNode(value, null);
  if (list.head) {
    list.tail.next = node;
    list.tail = node;
  } else {
    list.head = node;
    list.tail = node;
  }
}

export function push(list: any): void {
  for (let i = 1; i < arguments.length; ++i) {
    pushSingle(list, arguments[i]);
  }
}
