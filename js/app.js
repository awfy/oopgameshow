/**
 * Initialize the game when the "Start Game" button is clicked.
 */
let game;
const button = document.querySelector('#btn__reset')
button.addEventListener('click', function () {
  game = new Game;
  game.startGame();
});

/**
 * Add an event listener to pass the clicked button down to the interaction handler.
 */
const qwerty = document.querySelector('#qwerty');
qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
  }
});