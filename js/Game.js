class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrase();
    this.activePhrase = null;
  }

  /**
   * Create phrases for use in game.
   * @returns {Array} An array of phrases that could be used in the game.
   */
  createPhrase() {
    return [
      new Phrase('Life is like a box of chocolates'),
      new Phrase('There is no trying'),
      new Phrase('May the force be with you'),
      new Phrase('You have to see the matrix for yourself'),
      new Phrase('You talking to me'),
    ];
  }

  /**
   * Selects random phrase from phrases property.
   * @returns {Object} Phrase object to be used.
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  /**
   * Begins game by clearing out existing letter boxes.
   * Selecting a random phrase.
   * Displaying it to user.
   */
  startGame() {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();


    const qwerty = document.querySelectorAll('#qwerty button');
    for (let i = 0; i < qwerty.length; i++) {
      qwerty[i].disabled = false;
      qwerty[i].className = 'key';
    }
  };

  /**
   * Checks for winning move.
   * @return {boolean} True if game has been won, false if game wasn't won.
   */
  checkForWin() {
    const phraseListItems = document.querySelectorAll('#phrase ul li');
    const array = Array.from(phraseListItems).filter(item => item.classList.contains('hide'));
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Increases the value of the missed property.
   * Removes a life from the scoreboard.
   * Checks if player has remaining lives and ends game if player is out.
   */
  removeLife() {
    this.missed += 1;
    const lives = document.querySelectorAll('.tries img');
    if (this.missed === 5) {
      this.gameOver(false);
      for (let i = 0; i < 5; i++) {
        lives[i].src = 'images/liveHeart.png';
      }
    } else {
      for (let i = 0; i < 5; i++) {
        if (i < this.missed) {
          lives[i].src = 'images/lostHeart.png';
        } else {
          lives[i].src = 'images/liveHeart.png';
        }
      }
    }
  };

  /**
   * Displays game over message.
   * @param {boolean} gameWon - Whether or not the user won the game.
   */
  gameOver(gameWon) {
    const overlay = document.querySelector('#overlay');
    overlay.classList.remove('start');
    overlay.style.display = 'block';
    const message = document.querySelector('#game-over-message');
    if (gameWon) {
      message.textContent = 'Congrats! You won!';
      overlay.classList.add('win');
    } else {
      message.textContent = 'Ouch! You lost!';
      overlay.classList.add('lose');
    }
  };

  /**
   * Handles onscreen keyboard button clicks.
   * @param (HTMLButtonElement) button - The clicked button element.
   */
  handleInteraction(button) {
    const letter = button.textContent;
    button.disabled = true;
    if (this.activePhrase.checkLetter(letter)) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.classList.add('wrong');
      this.removeLife();
    }
  };
}