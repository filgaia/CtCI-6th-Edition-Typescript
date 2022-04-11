/* Employee is a super class for the Director, Manager, and Respondent classes.
 * It is implemented as an
 * abstract class, since there should be no reason to instantiated an Employee type directly.
 */
export class Employee {
  currentCall: any;

  rank?: number;

  callHandler: any;

  constructor(handler: any) {
    this.currentCall = null;
    this.rank;

    this.callHandler = handler;
  }

  /* Start the conversation */
  receiveCall(call: any): void {
    this.currentCall = call;

    setTimeout(() => this.callCompleted(), 0); // 3000 usually. 0 for testing purposes
  }

  /* the issue is resolved, finish the call */
  callCompleted(): void {
    if (this.currentCall !== null) {
      /* Disconnect the call. */
      this.currentCall.disconnect();

      /* Free the employee */
      this.currentCall = null;
    }

    /* Check if there is a call waiting in queue */
    this.assignNewCall();
  }

  /*
   * The issue has not been resolved. Escalate the call, and assign a new call
   * to the employee.
   */
  escalateAndReassign(): void {
    if (this.currentCall !== null) {
      /* esthis.calate call */
      this.currentCall.incrementRank();
      this.callHandler.dispatchCall(this.currentCall);

      /* free the employee */
      this.currentCall = null;
    }

    /* assign a new call */
    this.assignNewCall();
  }

  /* Assign a new call to an employee, if the employee is free. */
  assignNewCall(): boolean {
    if (!this.isFree()) {
      return false;
    }
    return this.callHandler.assignCall(this);
  }

  /* Returns whether or not the employee is free. */
  isFree(): boolean {
    return this.currentCall === null;
  }

  getRank(): number | undefined {
    return this.rank;
  }
}
