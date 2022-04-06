export interface LinkedListNode {
  next: LinkedListNode | null;
  val: number;
}

export interface LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
}
