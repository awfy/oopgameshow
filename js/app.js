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
 * Add an event listener to pass the clicked button down to the interaction 
 * handler.
 */
const qwerty = document.querySelector('#qwerty');
qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
  }
});

/**
 * Add an event listener to pass the key presses down to the interaction 
 * handler if they are from a to z.
 */
document.addEventListener('keyup', (e) => {
  const regex = new RegExp('^[a-z]$');
  if (regex.test(e.key)) {
    game.handleInteraction(e.key);
  }
});