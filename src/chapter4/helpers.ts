export interface ICache {
  min: number;
  max: number;
}

export class TreeNode {
  val: number;

  parent: TreeNode | null;

  left: TreeNode | null;

  right: TreeNode | null;

  [key: string]: TreeNode | number | null;

  constructor(value: number) {
    this.val = value;
    this.parent = this.left = this.right = null;
  }
}

export class Tree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  add(value: number): void {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
    } else {
      let n = this.root;
      let branch = '';
      while (n) {
        branch = value < n.val ? 'left' : 'right';
        if (!n[branch]) {
          break;
        }
        n = n[branch] as TreeNode;
      }
      node.parent = n;
      n[branch] = node;
    }
  }
}

class LinkedListNode {
  val: number;

  next: LinkedListNode | null;

  constructor(value: number, next?: LinkedListNode) {
    this.val = value;
    this.next = next || null;
  }
}

export class LinkedList {
  head: LinkedListNode | null;

  tail: LinkedListNode | null;

  constructor() {
    this.head = this.tail = null;
  }

  prepend(value: number): void {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      this.head = new LinkedListNode(value, this.head);
    }
  }

  append(value: number): void {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      if (this.tail) {
        this.tail.next = new LinkedListNode(value);
      }
      this.tail = this.tail?.next || null;
    }
  }

  toArray(): number[] {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}

function findDepth(cache: ICache, node: TreeNode, depth: number): void {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left!, depth + 1);
    findDepth(cache, node.right!, depth + 1);
  }
}

export function isBalanced(tree: Tree): boolean {
  if (!tree || !tree.root) {
    return true;
  }

  const node = tree.root;
  const cache = {
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER,
  };

  findDepth(cache, node, 0);
  return cache.max - cache.min <= 1;
}
