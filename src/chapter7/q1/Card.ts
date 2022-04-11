import { Suit } from './Suit';

export class Card {
  available: boolean;

  faceValue?: number;

  suit: any;

  constructor(c?: number, s?: typeof Suit) {
    this.available = true;
    this.faceValue = c;
    this.suit = s;
  }

  getSuit(): typeof Suit {
    return this.suit;
  }

  isAvailable(): boolean {
    return this.available;
  }

  markUnavailable(): void {
    this.available = false;
  }

  markAvailable(): void {
    this.available = true;
  }

  print(): void {
    const faceValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    if (this.faceValue && this.faceValue > 0) {
      process.stdout.write(faceValues[this.faceValue - 1]);
    }
    switch (this.suit) {
      case Suit.Club:
        process.stdout.write('c');
        break;
      case Suit.Heart:
        process.stdout.write('h');
        break;
      case Suit.Diamond:
        process.stdout.write('d');
        break;
      case Suit.Spade:
        process.stdout.write('s');
        break;
    }
    process.stdout.write(' ');
  }
}
