export interface ISuit {
  [key: string]: number;
}

export const Suit: ISuit = {
  Club: 0,
  Diamond: 1,
  Heart: 2,
  Spade: 3,
  getSuitFromValue: (value: number): number => {
    const keys = Object.keys(Suit);
    const key: string = keys.find((v: string) => Suit[v] === value)!;
    return Suit[key];
  },
};
