import { ISuit, Suit } from './Suit.js';
import { Deck } from './Deck.js';
import { BlackJackHand } from './BlackJackHand.js';
import { BlackJackCard } from './BlackJackCard.js';

export class BlackJackGameAutomaton {
  deck: Deck | undefined;

  hands: BlackJackHand[];

  static _HIT_UNTIL: number = 16;

  constructor(numPlayers: number) {
    this.deck = undefined;

    this.hands = [];
    for (let i = 0; i < numPlayers; i++) {
      this.hands.push(new BlackJackHand());
    }
  }

  dealInitial(): boolean {
    this.hands.forEach((hand: BlackJackHand) => {
      const card1 = this.deck?.dealCard();
      const card2 = this.deck?.dealCard();
      if (card1 === null || card2 === null) {
        return false;
      }
      hand.addCard(card1);
      hand.addCard(card2);
    });
    return true;
  }

  getBlackJacks(): number[] {
    const winners = [];
    for (let i = 0; i < this.hands.length; i++) {
      if (this.hands[i].isBlackJack()) {
        winners.push(i);
      }
    }
    return winners;
  }

  playHandIndex(i: number): boolean {
    const hand = this.hands[i];
    return this.playHand(hand);
  }

  playHand(hand: BlackJackHand): boolean {
    while (hand.score() < BlackJackGameAutomaton._HIT_UNTIL) {
      const card = this.deck?.dealCard();
      if (card === null) {
        return false;
      }
      hand.addCard(card);
    }
    return true;
  }

  playAllHands(): boolean {
    this.hands.forEach((hand: any) => {
      if (!this.playHand(hand)) {
        return false;
      }
    });
    return true;
  }

  getWinners(): number[] {
    let winners = [];
    let winningScore = 0;
    for (let i = 0; i < this.hands.length; i++) {
      const hand = this.hands[i];
      if (!hand.busted()) {
        if (hand.score() > winningScore) {
          winningScore = hand.score();
          winners = [];
          winners.push(i);
        } else if (hand.score() === winningScore) {
          winners.push(i);
        }
      }
    }
    return winners;
  }

  initializeDeck(): void {
    const cards = [];
    for (let i = 1; i <= 13; i++) {
      for (let j = 0; j <= 3; j++) {
        const suit: ISuit = Suit.getSuitFromValue(j);
        const card = new BlackJackCard(i, suit);
        cards.push(card);
      }
    }

    this.deck = new Deck();
    this.deck.setDeckOfCards(cards);
    this.deck.shuffle();
  }

  printHandsAndScore(): void {
    this.hands.forEach((hand: any, i: any) => {
      process.stdout.write(`Hand ${i} (${hand.score()}): `);
      hand.print();
      console.log('');
    });
  }
}
