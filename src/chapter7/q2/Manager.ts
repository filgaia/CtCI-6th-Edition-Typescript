import { Employee } from './Employee';
import { Rank } from './Rank';

export class Manager extends Employee {
  constructor(callHandler: any) {
    super(callHandler);
    this.rank = Rank.Manager;
  }
}
