class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phrase = this.phrase;
    const phraseList = document.querySelector('#phrase ul');
    phraseList.innerHTML = '';
    for (let i = 0; i < phrase.length; i++) {
      if (phrase.charAt(i) === ' ') {
        const spaceItem = document.createElement('li');
        spaceItem.className = 'space';
        spaceItem.textContent = '';
        phraseList.appendChild(spaceItem);
      } else {
        const letterItem = document.createElement('li');
        letterItem.className = `hide letter ${phrase.charAt(i)}`;
        letterItem.textContent = phrase.charAt(i);
        phraseList.appendChild(letterItem);
      }
    }
  };

  /**
   * Checks if passed letter is in phrase.
   * @param (string) letter - Letter to check.
   */
  checkLetter(letter) {
    return this.phrase.indexOf(letter) > -1 ? true : false;
  };

  /**
   * Displays passed letter on screen after a match is found .
   * @param (string) letter - Letter to display.
   */
  showMatchedLetter(letter) {
    const phraseListItem = document.querySelectorAll('#phrase ul li');
    for (let i = 0; i < phraseListItem.length; i++) {
      const box = phraseListItem[i];
      if (box.classList.contains(letter)) {
        box.classList.remove('hide');
        box.classList.add('show');
      }
    }
  };
}