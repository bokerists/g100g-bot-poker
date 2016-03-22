
var cards = require("./libs/cards.js");

exports = module.exports = {

  VERSION: 'Superstar poker js-player',

  bet: function (gamestate, bet) {

    //
    // gamestate contains info about the state of the game.
    // check the documentation at https://bot-poker.herokuapp.com/wiki for further info about the data structure.

    //
    // bet is the function you should use to send your bet.

    var betValue = 0;

    // enjoy the game!

    //
    // currently we just fold every single hand.

    'use strict';

    // console.log(`Currently playing tournament ${gamestate.tournamentId}`);
    //
    var myCards = cards.getMyCards(gamestate),
        myBet = cards.check(myCards, gamestate.commonCards);

    if (myBet !== false) {

      betValue = Math.max(gamestate.callAmount, gamestate.sb * myBet);

    }

    return bet(betValue);

  }

};
