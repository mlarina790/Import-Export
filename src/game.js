import { Character } from "./domain";

export class Game {
  start() {
    console.log('game started');
  }
}
const defaultGame = new Game();

export default defaultGame;

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}

console.log('game executed');