export interface Anagram {
  sortedWord: string;
  elements: string[];
}

export interface IVector {
  [key: string]: number;
}

export class RankNode {
  left_size = 0;

  left?: RankNode;

  right?: RankNode;

  data = 0;

  constructor(d: number) {
    this.data = d;
  }

  insert(d: number): void {
    if (d <= this.data) {
      if (this.left) this.left.insert(d);
      else this.left = new RankNode(d);
      this.left_size++;
    } else if (this.right != null) this.right.insert(d);
    else this.right = new RankNode(d);
  }

  getRank(d: number): number {
    if (d === this.data) {
      return this.left_size;
    }
    if (d < this.data) {
      if (!this.left) return -1;
      return this.left.getRank(d);
    }

    const rightRank = !this.right ? -1 : this.right.getRank(d);
    if (rightRank === -1) return -1;
    return this.left_size + 1 + rightRank;
  }
}
