import { Caller } from './Caller';
import { Rank } from './Rank';

export class Call {
  rank: number;

  caller: AnimationPlaybackEvent | Caller;

  handler: any;

  constructor(c: AnimationPlaybackEvent | Caller) {
    /* Minimal rank of employee who can handle this call. */
    this.rank = Rank.Responder;

    /* Person who is calling. */
    this.caller = c;

    /* Employee who is handling call. */
    this.handler;
  }

  /* Set employee who is handling call. */
  setHandler(e: any): void {
    this.handler = e;
  }

  /* Play recorded message to the customer. */
  reply(message: string): void {
    console.log(message);
  }

  getRank(): number {
    return this.rank;
  }

  setRank(r: number): void {
    this.rank = r;
  }

  incrementRank(): number {
    if (this.rank === Rank.Responder) {
      this.rank = Rank.Manager;
    } else if (this.rank === Rank.Manager) {
      this.rank = Rank.Director;
    }
    return this.rank;
  }

  /* Disconnect call. */
  disconnect(): void {
    this.reply('Thank you for calling');
  }
}
