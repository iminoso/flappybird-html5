
// create game on 400x490 canvas
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

var mainState ={
	preload: function () {
		// init function executed at start, where it will load game's assests
	},
	create: function() {
		// called after preload, where it will load game's sprites and set up game
	},
	update: function(){
		// called 60 times per second, contains game logic
	}
};

game.state.add('main', mainState);
game.state.start('main');

