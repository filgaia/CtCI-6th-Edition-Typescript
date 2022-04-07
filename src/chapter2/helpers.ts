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

export function getLength(list: LinkedListNode | null): number {
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

export function pushSingle(list: LinkedList, value: number): void {
  const node = createNode(value, null);
  if (list.head) {
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
  } else {
    list.head = node;
    list.tail = node;
  }
}

export function push(list: LinkedList): void {
  for (let i = 1; i < arguments.length; ++i) {
    pushSingle(list, arguments[i]);
  }
}

export function reverse(
  node: LinkedListNode | null,
  end: LinkedListNode | null,
): LinkedListNode | null {
  let prev = end;
  let next;
  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
}

export function padList(l: LinkedListNode, padding: number): LinkedListNode {
  let head: LinkedListNode = l;
  for (let i = 0; i < padding; i++) {
    head = insertBefore(head, 0);
  }
  return head;
}

export function insertBefore(list: LinkedListNode, data: number): LinkedListNode {
  const node: LinkedListNode = { val: data, next: null };
  if (list != null) {
    node.next = list;
  }
  return node;
}

export function isEqual(one: LinkedListNode | null, two: LinkedListNode | null): boolean {
  while (one !== null && two !== null) {
    if (one.val !== two.val) {
      return false;
    }
    one = one.next;
    two = two.next;
  }
  return one == null && two == null;
}
