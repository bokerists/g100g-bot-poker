var test = require('tape').test;
var cards = require('../libs/cards.js');
var game = require('../mockGame.js');
var mockCards = require('../mockCards.js');
// var mockCards = require('../mockCards.js');

test('Test', function(t) {
  //1
  t.equal(cards.getBet(), false);

  var myCards = cards.getMyCards(game);

  //2
  t.equal(myCards, game.players[0].cards);

  //3
  t.notEqual(cards.hasCoppia(myCards), false, "è una coppia");

  //4
  t.notEqual(cards.hasFull(cards.hasCoppia(myCards),  game.commonCards), false, "ho un full");

  //Last
  t.notEqual(cards.getBet(myCards, game.commonCards), false);

  t.end();

});

test('Poker', function(t) {

  game.commonCards = [
    mockCards.d1,
    mockCards.h1,
  ];

  var myCards = [
    mockCards.s1,
    mockCards.c1,
  ];

  //1
  t.notEqual(cards.hasPoker(cards.hasCoppia(myCards),  game.commonCards), false, "ho un poker");

  t.end();

});

test('Colore', function(t) {

  game.commonCards = [
    mockCards.d1,
    mockCards.d1,
    mockCards.d1,
    mockCards.d1,
    mockCards.d1,

  ];

  var myCards = [
    mockCards.d1,
    mockCards.d1,
  ];

  //1
  t.notEqual(cards.hasColore(myCards,  game.commonCards), false, "ho colore");

  t.end();

});

test('Coppia dal banco', function(t) {

  game.commonCards = [
    mockCards.d2,
    mockCards.d1,
  ];

  var myCards = [
    mockCards.c1,
    mockCards.h2
  ];

  //1
  t.notEqual(cards.hasCoppiaFromBank(myCards,  game.commonCards), false, "ho coppia");

  t.end();

});

test('hasFigures', function(t) {

  var myCardsWithFigures = [
    mockCards.d1,
    mockCards.cq
  ];

  //1
  t.equal(cards.hasFigures(myCardsWithFigures), true, "ho una figura");

  var myCardsWithoutFigures = [
    mockCards.d1,
    mockCards.c2
  ];

  t.notEqual(cards.hasFigures(myCardsWithoutFigures), true, "non ho una figura");

  t.end();

});

test('hasFigures', function(t) {

  var myCardsWithFigures = [
    mockCards.dq,
    mockCards.cq
  ];

  //1
  t.equal(cards.hasAllFigures(myCardsWithFigures), true, "ho una figura");

  var myCardsWithoutFigures = [
    mockCards.dq,
    mockCards.c2
  ];

  t.notEqual(cards.hasAllFigures(myCardsWithoutFigures), true, "non ho una figura");

  t.end();

});
