import { RankNode } from './ch10-models';

/**
 * Rank from Stream:
 * you are reading in a stream of integers. Periodically,
 * you wish to be able to look up the rank of a number x
 * (the number of values less than or equal to x)
 * time: O(log n)
 */
let root: RankNode;

export const track = (num: number) => {
  if (root == null) {
    root = new RankNode(num);
  } else {
    root.insert(num);
  }
};

export function getRankOfNumber(num: number): number {
  return root.getRank(num);
}
