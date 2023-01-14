import { Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';
import './domain.js';
import defaultCharacter from './domain.js';



export const game = new Game();
game.start();

console.log('app executed');