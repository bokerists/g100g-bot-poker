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

  isCoppia: function (mycard) {

    try {
      if (mycard[0].rank == mycard[1].rank && mycard[0].type == mycard[1].type) {
        return true;
      }

    } catch(e) {
      return false;
    }

  return false;

  },

  check: function (myCards, cards) {

    if (this.isCoppia(myCards)) {
      return true;
    }

    return false;
  }

};
