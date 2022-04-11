import { CallHandler } from './CallHandler';
import { Caller } from './Caller';

export function CallCenter(callers: number = 50): boolean {
  const callHandler = new CallHandler();

  for (let i = 0; i < callers; i++) {
    const caller = new Caller(i, `${i}`);
    callHandler.dispatchCall(caller);
  }

  return true;
}
