import { Card } from './Card';
import { Suit } from './Suit';

export class BlackJackCard extends Card {
  faceValue: number = 0;

  constructor(c: number, s: typeof Suit) {
    super(c, s);
  }

  value(): number {
    if (this.isAce()) {
      return 1;
    }
    if (this.faceValue >= 11 && this.faceValue <= 13) {
      return 10;
    }
    return this.faceValue;
  }

  minValue(): number {
    if (this.isAce()) {
      return 1;
    }
    return this.value();
  }

  maxValue(): number {
    if (this.isAce()) {
      return 11;
    }
    return this.value();
  }

  isAce(): boolean {
    return this.faceValue === 1;
  }

  isFaceCard(): boolean {
    return this.faceValue >= 11 && this.faceValue <= 13;
  }
}
