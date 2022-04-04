export class Deck {
  dealtIndex: any;

  cards: any;

  constructor() {
    this.dealtIndex = 0;
    this.cards = [];
  }

  setDeckOfCards(deckOfCards: any) {
    this.cards = deckOfCards;
  }

  randomInt(n: number) {
    return Math.round(Math.random() * n);
  }

  randomIntInRange(min: number, max: number) {
    return this.randomInt(max + 1 - min) + min;
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const j = this.randomIntInRange(i, this.cards.length - i - 1);

      const card1 = this.cards[i];
      const card2 = this.cards[j];

      this.cards[i] = card2;
      this.cards[j] = card1;
    }
  }

  remainingCards() {
    return this.cards.length - this.dealtIndex;
  }

  dealHand(number: number) {
    if (this.remainingCards() < number) {
      return null;
    }

    const hand = [];
    let count = 0;
    while (count < number) {
      const card = this.dealCard();
      if (card !== null) {
        hand[count] = card;
        count++;
      }
    }

    return hand;
  }

  dealCard() {
    if (this.remainingCards() === 0) {
      return null;
    }
    const card = this.cards[this.dealtIndex];
    card.markUnavailable();
    this.dealtIndex++;

    return card;
  }

  print() {
    this.cards.forEach((card: any) => card.print());
  }
}
