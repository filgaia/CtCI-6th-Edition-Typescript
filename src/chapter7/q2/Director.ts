import { Employee } from './Employee';
import { Rank } from './Rank';

export class Director extends Employee {
  rank: any;

  constructor(callHandler: any) {
    super(callHandler);
    this.rank = Rank.Director;
  }
}
