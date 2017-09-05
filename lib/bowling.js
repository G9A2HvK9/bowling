var Game = function() {
	this.rolls = [];
	this.currentRoll = 0;
};

Game.prototype.recordRoll = function(pins) {
	this.rolls[this.currentRoll++] = pins;
};

Game.prototype.calculateScore = function() {
	var game = this;
  var finalScore = 0;
  var index = 0;

	function simpleScore() {
		return game.rolls[index] + game.rolls[index + 1];
	};

	function spareBonus() {
		return game.rolls[index + 2];
	};

	function strikeBonus() {
		return game.rolls[index + 1] + game.rolls[index + 2];
	};

	function strike() {
		return game.rolls[index] === 10;
	};

	function spare() {
		return game.rolls[index] + game.rolls[index + 1] === 10;
	};

	for (var i = 0; i < 10; i++) {
		if (strike()) {
			finalScore += 10 + strikeBonus();
			index++;
		} else if (spare()) {
			finalScore += 10 + spareBonus();
			index += 2;
		} else {
			finalScore += simpleScore();
			index += 2;
		};
	};
	return finalScore;
};

module.exports = Game;
