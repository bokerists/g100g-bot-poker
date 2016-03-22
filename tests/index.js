var test = require('tape').test;
var cards = require('../libs/cards.js');
var game = require('../mockGame.js');
// var mockCards = require('../mockCards.js');

test('Test', function(t) {

  t.equal(cards.check(), false);

  var myCards = cards.getMyCards(game);

  t.equal(myCards, game.players[0].cards);

  t.equal(cards.check(myCards, game.commonCards), false);

  t.end();
});
