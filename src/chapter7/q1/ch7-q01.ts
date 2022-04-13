import { BlackJackGameAutomaton } from './BlackJackGameAutomaton';

export function BlackJack(numHands: number = 5): string {
  const automaton = new BlackJackGameAutomaton(numHands);
  let message = '';
  automaton.initializeDeck();

  let success = automaton.dealInitial();
  if (!success) {
    message = 'Error. Out of cards.';
  } else {
    // console.log('-- Initial --');
    // automaton.printHandsAndScore();
    const blackjacks = automaton.getBlackJacks();
    if (blackjacks.length > 0) {
      // console.log('Blackjack at ');
      // for (const i of blackjacks) {
      //  console.log(`${i}, `);
      // }
      // console.log('');
    } else {
      success = automaton.playAllHands();
      if (!success) {
        message = 'Error. Out of cards.';
      } else {
        // console.log('\n-- Completed Game --');
        // automaton.printHandsAndScore();
        const winners = automaton.getWinners();
        if (winners.length > 0) {
          message = 'Winners: ';
          // for (const i of winners) {
          //  console.log(`${i}, `);
          // }
          // console.log('');
        } else {
          message = 'Draw. All players have busted.';
        }
      }
    }
  }

  return message;
}
