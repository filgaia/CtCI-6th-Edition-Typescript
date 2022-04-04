class TreeNode {
  val: any;

  parent: any;

  left: any;

  right: any;

  constructor(value: any) {
    this.val = value;
    this.parent = this.left = this.right = null;
  }
}

export class Tree {
  root: any;

  constructor() {
    this.root = null;
  }

  add(value: any) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
    } else {
      let n = this.root;
      let branch: any;
      while (n) {
        branch = value < n.val ? 'left' : 'right';
        if (!n[branch]) {
          break;
        }
        n = n[branch];
      }
      node.parent = n;
      n[branch] = node;
    }
  }
}

class LinkedListNode {
  val: any;

  next: any;

  constructor(value: any, next?: any) {
    this.val = value;
    this.next = next || null;
  }
}

export class LinkedList {
  head: any;

  tail: any;

  constructor() {
    this.head = this.tail = null;
  }

  prepend(value: any) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      this.head = new LinkedListNode(value, this.head);
    }
  }

  append(value: any) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      this.tail = this.tail.next = new LinkedListNode(value);
    }
  }

  toArray() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}

function findDepth(cache: any, node: any, depth: any) {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}

export function isBalanced(tree: any) {
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
