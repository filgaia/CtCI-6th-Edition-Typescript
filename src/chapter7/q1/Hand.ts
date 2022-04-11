import { BlackJackCard } from './BlackJackCard';
import { Card } from './Card';

export class Hand extends Card {
  cards: BlackJackCard[];

  constructor() {
    super();
    this.cards = [];
  }

  score(): BlackJackCard {
    return this.cards.reduce(
      (aggregate: BlackJackCard, card: BlackJackCard) => aggregate + card.value(),
    );
  }

  addCard(card: BlackJackCard): void {
    this.cards.push(card);
  }

  print() {
    this.cards.forEach((card: BlackJackCard) => card.print());
  }
}
