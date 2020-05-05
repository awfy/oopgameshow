/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [
			new Phrase('Life is like a box of chocolates'),
			new Phrase('There is no trying'),
			new Phrase('May the force be with you'),
			new Phrase('You have to see the matrix for yourself'),
			new Phrase('You talking to me'),
		];
		this.activePhrase = null;
	};
	
	getRandomPhrase() {
		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	};

	startGame() {};
	handleInteraction() {};
	removeLife() {};
	checkForWin() {};
	gameOver() {};
}