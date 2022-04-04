import { expect } from 'chai';
import { findIndex } from './ch10-q05';

describe('ch10-q05: find index of item in string array with empty strings. ', () => {
  const array = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''];

  it('Index of "ball"', () => {
    const result = findIndex(array, 'ball');
    expect(result).to.be.eq(4);
  });

  it('Index of "at"', () => {
    const result = findIndex(array, 'at');
    expect(result).to.be.eq(0);
  });

  it('Index of "car"', () => {
    const result = findIndex(array, 'car');
    expect(result).to.be.eq(7);
  });

  it('Index of "dad"', () => {
    const result = findIndex(array, 'dad');
    expect(result).to.be.eq(10);
  });

  it('Index of item that doen\'t exist in array', () => {
    const result = findIndex(array, 'trololo');
    expect(result).to.be.eq(-1);
  });
});
