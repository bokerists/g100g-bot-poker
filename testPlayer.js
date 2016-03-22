var player = require('./player.js');
var game = require('./mockGame.js');

player.bet(game, function (bet) {
  console.log("Bet is " + bet);
});
