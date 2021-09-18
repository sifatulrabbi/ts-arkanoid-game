import Game from './game';

const startButton: HTMLObjectElement | null = document.querySelector('#start');
const game = new Game();

startButton?.addEventListener('click', () => game.start());
