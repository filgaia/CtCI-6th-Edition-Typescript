import { Card } from './Card.js';

export class Hand extends Card {
  cards: any;

  constructor() {
    super();
    this.cards = [];
  }

  score() {
    return this.cards.reduce((aggregate: any, card: any) => aggregate + card.value());
  }

  addCard(card: any) {
    this.cards.push(card);
  }

  print() {
    this.cards.forEach((card: any) => card.print());
  }
}
