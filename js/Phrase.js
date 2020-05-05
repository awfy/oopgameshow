/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	addPhraseToDisplay() {
		const displayArea = document.querySelector('#phrase ul');
		for (let i = 0; i < this.phrase.length; i += 1) {
			return `<li>${i}</li>`;
		}
	};

	checkLetter() {};
	showMatchedLetter() {};
}