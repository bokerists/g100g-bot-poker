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
  t.equal(cards.isCoppia(myCards), true, "è una coppia");

  //4
  t.equal(cards.check(myCards, game.commonCards), true);

  t.end();
});
