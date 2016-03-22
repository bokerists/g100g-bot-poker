exports = module.exports = {

  _figures: ['Q', 'K', 'J', 'A'],

  getMyCards: function (game) {

    var myCards = [];

    game.players.forEach(function (player) {
      if (game.me === player.id) {
        myCards = player.cards;
      }
    });

    return myCards;

  },

  hasCoppia: function (mycard) {

    try {
      if (mycard[0].rank == mycard[1].rank) {
        return mycard[0].rank;
      }

    } catch(e) {
      return false;
    }

    return false;

  },

  hasFull: function (rank, commonCards) {

    var hasFull = false;

    commonCards.forEach(function (card) {

      if (card.rank === rank) {
        hasFull = rank;
      }
    });

    return hasFull;

  },

  hasPoker: function (rank, commonCards) {

    var hasPoker = false,
        sameRank = 0;

    commonCards.forEach(function (card) {

      if (card.rank === rank) {
        sameRank++;

        if (sameRank == 2) {
          hasPoker = true;
        }

      }
    });

    return hasPoker;

  },

  hasColore: function (myCards, cards) {

    // Chek if i have two card with same Colore
    //
    var sameType = false,
        hasColore = false;

    try {
      if (myCards[0].type == myCards[1].type) {
        sameType = myCards[0].type;
      }

    } catch(e) {
      return false;
    }

    if (sameType === false) return false;


    cards.forEach(function (card) {

      if (card.type === sameType) {
        hasColore = sameType;
      }
    });

    return hasColore;

  },

  hasFigures: function (myCards) {

    var hasFigures = false;

    myCards.forEach(function (card) {

      if(this._figures.indexOf(card.rank) !== -1) {
        hasFigures = true;
      }

    }.bind(this));

    return hasFigures;
  },

  hasAllFigures: function (myCards) {

    var hasFigures = false;

    myCards.forEach(function (card) {

      if(this._figures.indexOf(card.rank) !== -1) {
        hasFigures = true;
      } else {
        hasFigures = false;
      }

    }.bind(this));

    return hasFigures;
  },

  hasCoppiaFromBank: function (myCards, cards) {

    var hasCoppia = false;

    try {

    myCards.forEach(function (mycard) {

      cards.forEach(function (card) {
        if (mycard.rank === card.rank) {
          hasCoppia = true;
        }
      });

    });

  } catch(e) {
    hasCoppia = false;
  }

    return hasCoppia;

  },

  getBet: function (myCards, cards) {

    if (this.hasColore(myCards, cards)) {
      return 1;
    }

    if (this.hasCoppia(myCards)) {

      // Rimango se alla prima carta ho un full
      if (this.hasFull(this.hasCoppia(myCards), cards) && cards.length > 1) {
        return 3;
      }

      if (this.hasPoker(this.hasCoppia(myCards), cards) && cards.length > 2) {
        return 4;
      }


      // if (cards.length < 2) {
      //   return 2;
      // } else {
      //   return false;
      // }
      //
      return this.hasAllFigures(myCards) ? 3 : 1;

    }

    if (this.hasCoppiaFromBank(myCards, cards)) {
      return this.hasFigures(myCards) ? 3 : 1;
    }

    return false;
  }

};
