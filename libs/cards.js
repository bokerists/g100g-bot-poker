exports = module.exports = {

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

  check: function (myCards, cards) {

    if (this.hasCoppia(myCards)) {

      // Rimango se alla prima carta ho un full
      if (this.hasFull(this.hasCoppia(myCards), cards) && cards.length > 1) {
        return true;
      }

      if (this.hasPoker(this.hasCoppia(myCards), cards) && cards.length > 2) {
        return true;
      }


      if (cards.length < 2) {
        return true;
      } else {
        return false;
      }

    }

    return false;
  }

};
