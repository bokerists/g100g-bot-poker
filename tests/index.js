var test = require('tape').test;
var cards = require('../libs/cards.js');
var game = require('../mockGame.js');
// var mockCards = require('../mockCards.js');

test('Test', function(t) {
  //1
  t.equal(cards.check(), false);

  var myCards = cards.getMyCards(game);

  //2
  t.equal(myCards, game.players[0].cards);

  //3
  t.notEqual(cards.hasCoppia(myCards), false, "è una coppia");

  //4
  t.notEqual(cards.hasFull(cards.hasCoppia(myCards),  game.commonCards), false, "ho un full");

  //Last
  t.equal(cards.check(myCards, game.commonCards), true);



  t.end();
});
