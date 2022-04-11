import { BlackJackGameAutomaton } from './BlackJackGameAutomaton.js';

const numHands = 5;

const automaton = new BlackJackGameAutomaton(numHands);
automaton.initializeDeck();

let success = automaton.dealInitial();
if (!success) {
  console.log('Error. Out of cards.');
} else {
  console.log('-- Initial --');
  automaton.printHandsAndScore();
  const blackjacks = automaton.getBlackJacks();
  if (blackjacks.length > 0) {
    process.stdout.write('Blackjack at ');
    for (const i of blackjacks) {
      process.stdout.write(`${i}, `);
    }
    console.log('');
  } else {
    success = automaton.playAllHands();
    if (!success) {
      console.log('Error. Out of cards.');
    } else {
      console.log('\n-- Completed Game --');
      automaton.printHandsAndScore();
      const winners = automaton.getWinners();
      if (winners.length > 0) {
        process.stdout.write('Winners: ');
        for (const i of winners) {
          process.stdout.write(`${i}, `);
        }
        console.log('');
      } else {
        console.log('Draw. All players have busted.');
      }
    }
  }
}
