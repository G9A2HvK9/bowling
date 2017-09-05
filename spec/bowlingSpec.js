describe("Bowling", function(){
  var Game = require("../lib/bowling.js");
  var game;

  beforeEach(function(){
    game = new Game();
  });

  function playRolls(n, pins){
    for (var i=0; i<n; i++){
      game.recordRoll(pins)
    };
  };

  function recordSpare(){
    game.recordRoll(5);
    game.recordRoll(5);
  };

  function recordStrike(){
    game.recordRoll(10);
  }

  it("records a 0 pin game", function(){
    playRolls(20, 0);
    expect(game.calculateScore()).toEqual(0);
  });

  it("records a game without any multipliers", function(){
    playRolls(20, 1);
    expect(game.calculateScore()).toEqual(20);
  });

  it("knows how to record a spare", function(){
    recordSpare();
    game.recordRoll(1);
    playRolls(17, 0);
    expect(game.calculateScore()).toEqual(12);
  });

  it("knows how to record a strike", function(){
    recordStrike();
    playRolls(2, 1);
    playRolls(16, 0);
    expect(game.calculateScore()).toEqual(14);
  });

  it("knows how to record a perfect game", function(){
    playRolls(20, 10);
    expect(game.calculateScore()).toEqual(300);
  });

});
