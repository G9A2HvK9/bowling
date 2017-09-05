var ScoreCard = function(){
  this.rolls = [
    {f1r1: 0}
  ]

  this.f1r1 = 0;
  this.f1r2 = 0;
  this.f1score = 0;

  this.f2r2 = 0;
  this.f2r2 = 0;
  this.f2score = 0;

  this.f3r1 = 0;
  this.f3r2 = 0;
  this.f3score = 0;

  this.f4r1 = 0;
  this.f4r2 = 0;
  this.f4score = 0;

  this.f5r1 = 0;
  this.f5r2 = 0;
  this.f5score = 0;

  this.f6r1 = 0;
  this.f6r2 = 0;
  this.f6score = 0;

  this.f7r1 = 0;
  this.f7r2 = 0;
  this.f7score = 0;

  this.f8r1 = 0;
  this.f8r2 = 0;
  this.f8score = 0;

  this.f9r1 = 0;
  this.f9r2 = 0;
  this.f9score = 0;

  this.f10r1 = 0;
  this.f10r2 = 0;
  this.f10r3 = 0;
  this.f10score = 0;
};

ScoreCard.prototype.recordRoll = function(pins){
  this.rolls[this.currentRoll++].rollScore = pins;
}

module.exports = ScoreCard;
