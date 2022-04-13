import { expect } from 'chai';
import { track, getRankOfNumber } from './ch10-q10';

describe('ch10-q10: getRankOfNumber', () => {
  before(() => {
    track(5);
    track(1);
    track(4);
    track(4);
    track(5);
    track(9);
    track(7);
    track(13);
    track(3);
  });

  it('getRankOfNumber(1) to be 0', () => {
    expect(getRankOfNumber(1)).to.be.equal(0);
  });
  it('getRankOfNumber(3) to be 1', () => {
    expect(getRankOfNumber(3)).to.be.equal(1);
  });
  it('getRankOfNumber(4) to be 3', () => {
    expect(getRankOfNumber(4)).to.be.equal(3);
  });
});
